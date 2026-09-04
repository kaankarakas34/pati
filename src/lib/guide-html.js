import DOMPurify from 'dompurify';

export function sanitizeGuideHtml(content) {
  return DOMPurify.sanitize(typeof content === 'string' ? content : '', {
    ALLOWED_TAGS: ['p', 'br', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'a', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false
  });
}
