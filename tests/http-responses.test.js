import test from 'node:test';
import assert from 'node:assert/strict';
import { sendServerError, redirectToLocalPath, handleRequestError } from '../lib/http-responses.js';

function responseSpy() {
  return {
    statusCode: 200,
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
    send(body) { this.body = body; return this; },
    redirect(code, location) { this.statusCode = code; this.location = location; return this; }
  };
}

test('redirect validation rejects external, encoded and malformed destinations', () => {
  for (const target of [
    'https://attacker.example', '//attacker.example', '/\\attacker.example',
    '/%2f%2fattacker.example', '/%252fattacker.example', '/foo\r\nLocation: evil',
    '/foo\n', '/foo/../bar', '/foo?next=evil', '/foo#evil',
    '/foo//bar', '/foo bar', '/a'.repeat(1100), '', undefined, {}
  ]) {
    const res = responseSpy();
    redirectToLocalPath(res, target);
    assert.equal(res.statusCode, 400, String(target));
    assert.equal(res.location, undefined);
  }
  for (const target of ['/evcil-hayvan-dostu-oteller', '/otel/istanbul/kadikoy/otel-1']) {
    const res = responseSpy();
    redirectToLocalPath(res, target);
    assert.equal(res.statusCode, 301);
    assert.equal(res.location, target);
  }
});

test('server errors preserve status and only log diagnostic details server-side', (t) => {
  const log = t.mock.method(console, 'error', () => {});
  const error = new Error('PRIVATE_DATABASE_CONNECTION');
  for (const status of [500, 503]) {
    const res = responseSpy();
    sendServerError(res, error, status);
    assert.equal(res.statusCode, status);
    assert.equal(res.body.ok, false);
    assert.equal(JSON.stringify(res.body).includes(error.message), false);
    assert.equal(Object.hasOwn(res.body, 'stack'), false);
  }
  assert.equal(log.mock.calls[0].arguments[1], error);
});

test('unexpected Express errors are generic and sent responses are delegated', (t) => {
  t.mock.method(console, 'error', () => {});
  const error = new Error('PRIVATE_STACK_DETAIL');
  const res = responseSpy();
  handleRequestError(error, {}, res, () => assert.fail('Unexpected delegation'));
  assert.equal(res.statusCode, 500);
  assert.equal(JSON.stringify(res.body).includes(error.message), false);
  let forwarded;
  handleRequestError(error, {}, { headersSent: true }, value => { forwarded = value; });
  assert.equal(forwarded, error);
});
