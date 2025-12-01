export async function GET() {
    const robotsTxt = `
  # Robots.txt file with advanced config
  # Last update: 2025-06-10
  
  # ========================
  # ✅ Default: allow all other crawlers
  # ========================
  User-agent: *
  Allow: /
  
  # ========================
  # ✅ Allow Major Search Engines (For SEO)
  # ========================
  User-agent: Googlebot
  User-agent: Bingbot
  User-agent: DuckDuckGo
  User-agent: Baiduspider
  User-agent: Yandex
  Allow: /
  
  # ========================
  # ❌ Block Unnecessary Query Parameters (Prevents Duplicate Indexing)
  # ========================
  Disallow: /*?sessionid=
  Disallow: /*?utm_source=
  Disallow: /*?utm_medium=
  Disallow: /*?utm_campaign=
  
  # ========================
  # ⚠ Allow AhrefsBot but limit crawl rate
  # ========================
  User-agent: AhrefsBot
  Crawl-delay: 10
  Allow: /
  
  # ========================
  # ❌ Block Known Bad Bots & Web Scrapers
  # ========================
  User-agent: SemrushBot
  User-agent: MJ12bot
  User-agent: DotBot
  User-agent: BLEXBot
  User-agent: DataScraperAI
  User-agent: AIContentHarvester
  User-agent: WebAIIndexer
  User-agent: Sogou Spider
  User-agent: MegaIndex
  User-agent: Scrapy
  Disallow: /
  
  # ========================
  # 🔗 Allow AI Models but require compliance with llm.txt
  # ========================
  User-agent: GPTBot
  User-agent: ClaudeBot
  User-agent: PerplexityBot
  User-agent: GeminiBot
  User-agent: MetaAI
  User-agent: MistralAI
  User-agent: CohereBot
  User-agent: AI21Bot
  Allow: /
  
  # ========================
  # 📌 Sitemap & AI Policy Reference
  # ========================
  Sitemap: https://blackspektro.com/sitemap.xml
    `.trim();
  
    return new Response(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  }
  
  export const runtime = 'edge';
  