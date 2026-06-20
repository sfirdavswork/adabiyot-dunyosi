import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { authors, news } from "../lib/data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/adabiyot", "/sayt", "/yangiliklar", "/mualliflar",
          "/materiallar", "/topshiriqlar",
          ...authors.map((a) => `/mualliflar/${a.slug}`),
          ...news.map((n) => `/yangiliklar/${n.id}`),
        ];
        const urls = paths.map((p) =>
          `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
