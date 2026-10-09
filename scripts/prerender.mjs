// Roda depois do build: coloca o HTML da página dentro de dist/index.html,
// injeta os dados estruturados e gera o sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssr = path.join(root, "dist-ssr", "entry-server.js");

const { render, clinic, buildJsonLd } = await import(pathToFileURL(ssr).href);

const indexPath = path.join(dist, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

if (!html.includes('<div id="root"></div>') || !html.includes("<!--JSON-LD-->")) {
  throw new Error("index.html fora do esperado: faltam #root vazio ou <!--JSON-LD-->.");
}

const jsonLd = JSON.stringify(buildJsonLd(clinic)).replace(/</g, "\\u003c");
html = html
  .replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
  .replace("<!--JSON-LD-->", () => `<script type="application/ld+json">${jsonLd}</script>`);
fs.writeFileSync(indexPath, html);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${clinic.siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("Pré-renderização concluída.");
