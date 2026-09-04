import fs from 'node:fs';

export function getIndexHtmlTemplate() {
  // The reader accepts no path input; both templates are fixed module-relative files.
  if (fs.existsSync(new URL('../dist/index.html', import.meta.url))) {
    return fs.readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  }
  return fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
}
