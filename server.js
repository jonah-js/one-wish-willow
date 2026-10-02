import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, normalize, resolve } from "node:path";
import { renderHomePage } from "./src/views/homePage.js";
import { renderProductPage } from "./src/views/productPage.js";
import { renderArticlePage } from "./src/views/articlePage.js";
import { renderImpressumPage } from "./src/views/impressumPage.js";
import { renderSuccessPage } from "./src/views/successPage.js";
import { renderCancelPage } from "./src/views/cancelPage.js";
import { generateSitemapXml } from "./src/views/sitemap.js";

const publicDir = resolve(process.cwd(), "public");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const staticRoutes = new Map([
  ["/", renderHomePage],
  ["/product", renderProductPage],
  ["/impressum", renderImpressumPage],
  ["/success", renderSuccessPage],
  ["/cancel", renderCancelPage]
]);

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${port}`);
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method not allowed");
    return;
  }

  const pathname = url.pathname;

  // 301 Redirect for legacy .html requests for SEO (kein .html)
  if (pathname.endsWith(".html")) {
    const cleanPath = pathname === "/index.html" ? "/" : pathname.slice(0, -5);
    res.writeHead(301, {
      Location: cleanPath + (url.search || ""),
      "Cache-Control": "public, max-age=31536000"
    });
    res.end();
    return;
  }

  // Alias /imprint -> /impressum
  if (pathname === "/imprint") {
    res.writeHead(301, {
      Location: "/impressum" + (url.search || ""),
      "Cache-Control": "public, max-age=31536000"
    });
    res.end();
    return;
  }

  // Trailing slash redirect (e.g. /product/ -> /product)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    res.writeHead(301, {
      Location: pathname.slice(0, -1) + (url.search || ""),
      "Cache-Control": "public, max-age=31536000"
    });
    res.end();
    return;
  }

  // Dynamic XML Sitemap (Automatically includes all articles from articles.js)
  if (pathname === "/sitemap.xml") {
    const xml = generateSitemapXml();
    res.writeHead(200, {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate"
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    res.end(xml);
    return;
  }

  // Pure JavaScript Server-Rendered Views (0 .html files)
  const staticRenderer = staticRoutes.get(pathname);
  if (staticRenderer) {
    const html = staticRenderer();
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate"
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    res.end(html);
    return;
  }

  // Dynamic Stories/Article Routes: /stories/:slug (Only from Google entry / direct links)
  if (pathname === "/stories" || pathname === "/stories/") {
    res.writeHead(301, { "Location": "/product" });
    res.end();
    return;
  }
  if (pathname.startsWith("/stories/")) {
    const slug = pathname.slice("/stories/".length);
    const html = renderArticlePage(slug);
    if (html) {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, must-revalidate"
      });
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      res.end(html);
      return;
    }
  }

  // Static Assets (CSS, JS, Images, Robots, Sitemap) from public/
  const rawPath = normalize(resolve(publicDir, `.${pathname}`));
  if (rawPath.startsWith(publicDir) && existsSync(rawPath) && statSync(rawPath).isFile()) {
    const ext = extname(rawPath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=86400"
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    createReadStream(rawPath).pipe(res);
    return;
  }

  // 404 Not Found
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
}).listen(port, () => {
  console.log(`One Wish Willow shop running at http://localhost:${port}`);
});
