import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('');
globalThis.window = dom.window;
const { sanitizeGuideHtml } = await import('../src/lib/guide-html.js');

test('guide HTML removes executable markup while retaining editorial formatting', () => {
  const clean = sanitizeGuideHtml('<h2>Travel</h2><p><strong>Checklist</strong><a href="https://example.com">Read</a></p>');
  assert.ok(clean.includes('<h2>Travel</h2>'));
  assert.ok(clean.includes('<strong>Checklist</strong>'));
  assert.ok(clean.includes('href="https://example.com"'));
  const payloads = [
    '<img src=x onerror=alert(1)><p onclick=alert(1)>Text</p>',
    '<script>alert(1)</script><iframe srcdoc="bad"></iframe>',
    '<a href="javascript:alert(1)">Click</a>',
    '<a href="jav&#x61;script:alert(1)">Click</a>',
    '<svg><a onload=alert(1)>Click</a></svg>',
    '<form id="location"><input name="href"></form><p style="color:red">Text</p>'
  ];
  for (const payload of payloads) {
    const root = dom.window.document.createElement('div');
    root.innerHTML = sanitizeGuideHtml(payload);
    assert.equal(root.querySelector('script,iframe,svg,img,form,input'), null);
    for (const node of root.querySelectorAll('*')) {
      for (const attr of node.attributes) {
        assert.ok(['href', 'title'].includes(attr.name), attr.name);
        assert.ok(!/^javascript:/i.test(attr.value));
      }
    }
  }
  assert.equal(sanitizeGuideHtml(null), '');
});
