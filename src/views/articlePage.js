import { renderLayout } from "./layout.js";
import { articles } from "../data/articles.js";

export function renderArticlePage(slug) {
  const article = articles.find(a => a.slug === slug);
  if (!article) return null;

  const otherArticles = articles.filter(a => a.slug !== slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": [
      `https://onewishwillow.com${article.image}`
    ],
    "datePublished": "2026-10-01T08:00:00+00:00",
    "dateModified": "2026-10-02T12:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "One Wish Willow Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "One Wish Willow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://onewishwillow.com/assets/inde-navarrette-obsession-chocolate.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://onewishwillow.com/stories/${article.slug}`
    }
  };

  const relatedHtml = otherArticles.map(rel => `
    <a class="related-card" href="/stories/${rel.slug}">
      <img src="${rel.image}" alt="${rel.title}" loading="lazy">
      <div class="related-copy">
        <span class="related-meta">${rel.readTime}</span>
        <h4>${rel.title}</h4>
      </div>
    </a>
  `).join("");

  const body = `
    <main class="article-page" id="top">
      <article class="article-container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="/">Home</a> <span>/</span>
          <span aria-current="page">${article.title}</span>
        </nav>

        <header class="article-header reveal">
          <p class="eyebrow">Curry Barker's Obsession · Film Lore</p>
          <h1>${article.title}</h1>
          <div class="article-byline">
            <span>By One Wish Willow Editorial</span>
            <span class="byline-dot">✦</span>
            <span>${article.date}</span>
            <span class="byline-dot">✦</span>
            <span>${article.readTime}</span>
          </div>
        </header>

        <div class="article-featured-media reveal">
          <img src="${article.image}" alt="${article.title}" fetchpriority="high">
        </div>

        <div class="article-prose reveal">
          ${article.content}
        </div>

        <div class="article-footer-cta reveal">
          <div class="article-cta-panel">
            <span class="cta-mini-badge">As Seen in the Movie</span>
            <h3>Ready to Experience the One Wish Willow?</h3>
            <p>Get the screen-accurate replica prop and triangular vintage box today. Every order includes the black two-piece wish stick and full presentation packaging.</p>
            <div class="cta-actions">
              <a class="button primary" href="/product">Order the Prop Set ($26)</a>
              <a class="button secondary" href="/">Explore Shop</a>
            </div>
          </div>
        </div>

        <section class="related-stories-section reveal">
          <h3>Explore More from the World of Obsession</h3>
          <div class="related-grid">
            ${relatedHtml}
          </div>
        </section>
      </article>
    </main>
  `;

  return renderLayout({
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    canonical: `https://onewishwillow.com/stories/${article.slug}`,
    structuredData,
    body
  });
}
