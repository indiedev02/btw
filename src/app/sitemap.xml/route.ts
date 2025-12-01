import { NextResponse } from "next/server";

const BASE_URL = "https://blackspektro.com";

export const GET = async () => {
  const staticPages = [
    {
      path: "/",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      path: "/terms-and-conditions",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: "0.8",
    },
    {
      path: "/privacy-policy",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: "0.8",
    },
  ];

  const escapeXml = (str: string): string =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      ({ path, lastmod, changefreq, priority }) => `  <url>
    <loc>${escapeXml(BASE_URL + path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return new NextResponse(sitemapContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hours
    },
  });
};
