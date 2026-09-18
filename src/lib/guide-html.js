import DOMPurify from 'dompurify';

export function markdownToHtml(content) {
  if (typeof content !== 'string') return '';
  if (/<(p|h2|h3|h4|div|article)/i.test(content)) {
    return content;
  }

  // Convert markdown headings
  let html = content
    .replace(/^#### (.*?)$/gm, '<h4>$1</h4>')
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // Convert bold and italic
  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert markdown links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Convert bullet lists
  html = html.replace(/^(?:[-*]|\d+\.) (.*?)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*?<\/li>\s*)+)/gs, '<ul>$1</ul>');

  // Split into paragraphs by blank lines
  const blocks = html.split(/\n\s*\n/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-6]|ul|ol|li|blockquote|div|p)/i.test(block)) {
      return block;
    }
    return `<p>${block.replace(/\n/g, '<br/>')}</p>`;
  }).filter(Boolean).join('\n');

  return html;
}

export function sanitizeGuideHtml(content) {
  const converted = markdownToHtml(content);
  return DOMPurify.sanitize(converted, {
    ALLOWED_TAGS: ['p', 'br', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'a', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false
  });
}
