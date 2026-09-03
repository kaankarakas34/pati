/**
 * Agent 6: Log-Level AI Crawler Auditor
 * Ref: PDF Page 4 - "Log-level AI crawler analizi: GA4 tek başına AI crawler davranışını göstermez"
 * 
 * Analyzes access logs for AI crawler user-agents, response status codes, and target URLs.
 */

export const KNOWN_AI_CRAWLERS = [
  { name: 'OpenAI GPTBot', regex: /GPTBot/i, botFamily: 'OpenAI' },
  { name: 'OpenAI SearchBot', regex: /OAI-SearchBot/i, botFamily: 'SearchGPT' },
  { name: 'Perplexity Bot', regex: /PerplexityBot/i, botFamily: 'Perplexity' },
  { name: 'Google-Extended', regex: /Google-Extended/i, botFamily: 'Google Gemini' },
  { name: 'ClaudeBot', regex: /ClaudeBot/i, botFamily: 'Anthropic' },
  { name: 'Applebot-Extended', regex: /Applebot-Extended/i, botFamily: 'Apple Intelligence' },
  { name: 'Googlebot Standard', regex: /Googlebot/i, botFamily: 'Google Search' }
];

export function parseCrawlerLogLines(logLines = []) {
  const stats = {
    totalLines: logLines.length,
    aiBotHits: 0,
    byBot: {},
    byStatusCode: {},
    topCrawledUrls: {}
  };

  for (const line of logLines) {
    if (!line || typeof line !== 'string') continue;

    for (const crawler of KNOWN_AI_CRAWLERS) {
      if (crawler.regex.test(line)) {
        stats.aiBotHits++;
        stats.byBot[crawler.name] = (stats.byBot[crawler.name] || 0) + 1;

        // Extract status code (typical Apache/Nginx format: "GET /url HTTP/1.1" 200)
        const statusMatch = line.match(/"\s+(\d{3})\s+/);
        const status = statusMatch ? statusMatch[1] : 'unknown';
        stats.byStatusCode[status] = (stats.byStatusCode[status] || 0) + 1;

        // Extract requested URL
        const urlMatch = line.match(/"(?:GET|POST|HEAD)\s+([^\s]+)/);
        if (urlMatch) {
          const url = urlMatch[1];
          stats.topCrawledUrls[url] = (stats.topCrawledUrls[url] || 0) + 1;
        }
        break;
      }
    }
  }

  return stats;
}

export function generateSampleAiCrawlerReport() {
  const mockLines = [
    '66.249.66.1 - - [03/Sep/2026:14:20:11 +0300] "GET /otel/antalya/alanya/otel-deniz HTTP/1.1" 200 4520 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"',
    '20.171.207.1 - - [03/Sep/2026:14:21:05 +0300] "GET /evcil-hayvan-dostu-oteller HTTP/1.1" 200 8920 "-" "Mozilla/5.0 AppleWebKit/537.36 (compatible; GPTBot/1.2; +https://openai.com/gptbot)"',
    '151.101.65.1 - - [03/Sep/2026:14:22:30 +0300] "GET /kedi-kopek-otelleri HTTP/1.1" 200 6210 "-" "PerplexityBot/1.0 (+https://perplexity.ai/bot)"',
    '20.171.207.2 - - [03/Sep/2026:14:25:12 +0300] "GET /otel/mugla/bodrum/bodrum-pet-resort HTTP/1.1" 200 7800 "-" "Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)"',
    '66.249.66.2 - - [03/Sep/2026:14:26:40 +0300] "GET /robots.txt HTTP/1.1" 200 412 "-" "Google-Extended"'
  ];

  return parseCrawlerLogLines(mockLines);
}
