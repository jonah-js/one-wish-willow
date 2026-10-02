import { articles } from "../data/articles.js";

function escapeXml(unsafe) {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSitemapXml(baseUrl = "https://onewishwillow.com") {
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    {
      loc: `${baseUrl}/`,
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0",
      images: [
        {
          loc: `${baseUrl}/assets/one-wish-willow-box-hands.jpg`,
          title: "One Wish Willow Vintage Packaging Held in Hands - Official Prop from the Movie Obsession",
          caption: "Screen-accurate One Wish Willow prop box as featured in Curry Barker's psychological thriller Obsession"
        },
        {
          loc: `${baseUrl}/assets/inde-navarrette-obsession-chocolate.jpg`,
          title: "Inde Navarrette holding the One Wish Willow Chocolate Bar in Curry Barker's film Obsession",
          caption: "The official screen-accurate One Wish Willow chocolate prop from the movie Obsession"
        }
      ]
    },
    {
      loc: `${baseUrl}/product`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.95",
      images: [
        {
          loc: `${baseUrl}/assets/product-cinematic.png`,
          title: "One Wish Willow Screen-Accurate Prop Set with Vintage Triangular Packaging"
        },
        {
          loc: `${baseUrl}/assets/inde-navarrette-obsession-chocolate.jpg`,
          title: "Inde Navarrette as Nikki in Obsession"
        }
      ]
    },
    {
      loc: `${baseUrl}/impressum`,
      lastmod: today,
      changefreq: "yearly",
      priority: "0.3",
      images: []
    }
  ];

  // Automatically include all articles defined in articles.js
  const articlePages = articles.map(article => ({
    loc: `${baseUrl}/stories/${article.slug}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.85",
    images: article.image ? [
      {
        loc: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
        title: article.title,
        caption: article.excerpt || article.title
      }
    ] : []
  }));

  const allPages = [...staticPages, ...articlePages];

  const urlElements = allPages.map(page => {
    let imagesXml = "";
    if (page.images && page.images.length > 0) {
      imagesXml = "\n" + page.images.map(img => {
        let captionXml = img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : "";
        return `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${captionXml}
    </image:image>`;
      }).join("\n");
    }

    return `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${imagesXml}
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>
`;
}
