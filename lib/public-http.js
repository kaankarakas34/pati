import axios from 'axios';
import { lookup } from 'node:dns/promises';
import http from 'node:http';
import https from 'node:https';
import ipaddr from 'ipaddr.js';

export function isPublicAddress(address) {
  if (!ipaddr.isValid(address)) return false;
  return ipaddr.process(address).range() === 'unicast';
}

export async function resolvePublicUrl(rawUrl, resolve = lookup) {
  const url = new URL(rawUrl);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password ||
      (url.port && !['80', '443'].includes(url.port))) {
    throw new Error('URL is not allowed.');
  }
  const hostname = url.hostname.replace(/^\[|\]$/g, '');
  const addresses = ipaddr.isValid(hostname)
    ? [{ address: hostname, family: ipaddr.parse(hostname).kind() === 'ipv6' ? 6 : 4 }]
    : await resolve(hostname, { all: true, verbatim: true });
  if (!addresses.length || addresses.some(({ address }) => !isPublicAddress(address))) {
    throw new Error('Private or reserved network addresses are not allowed.');
  }
  return { url, addresses };
}

export async function getPublicUrl(rawUrl, { timeout = 5000, headers = {} } = {}) {
  const { url, addresses } = await resolvePublicUrl(rawUrl);
  // Pin the validated DNS result to the actual socket to prevent DNS rebinding.
  const pinnedLookup = (_hostname, options, callback) => {
    if (options?.all) return callback(null, addresses);
    const address = addresses.find(item => !options?.family || item.family === options.family);
    if (!address) return callback(new Error('No allowed address for this family.'));
    callback(null, address.address, address.family);
  };
  const httpAgent = new http.Agent({ lookup: pinnedLookup });
  const httpsAgent = new https.Agent({ lookup: pinnedLookup, rejectUnauthorized: true });
  try {
    return await axios.get(url.href, {
      timeout, headers, httpAgent, httpsAgent,
      proxy: false, maxRedirects: 0, maxContentLength: 2 * 1024 * 1024,
      responseType: 'text'
    });
  } finally {
    httpAgent.destroy();
    httpsAgent.destroy();
  }
}
