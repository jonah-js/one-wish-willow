import { renderLayout } from "./layout.js";
import { articles } from "../data/articles.js";

export function renderStoriesHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Film Lore & Stories | One Wish Willow from Curry Barker's 'Obsession'",
    "description": "Behind-the-scenes articles, lore analysis, and collector guides for the One Wish Willow chocolate prop from the movie Obsession.",
    "url": "https://onewishwillow.com/stories"
  };

  const articleCards = articles.map(art => `
    <article class="story-card reveal">
      <a class="story-image-wrap" href="/stories/${art.slug}" aria-label="${art.title}">
        <img src="${art.image}" alt="${art.title}" loading="lazy">
        <span class="story-badge">${art.readTime}</span>
      </a>
      <div class="story-body">
        <div class="story-meta">
          <span>${art.date}</span>
          <span class="story-dot">✦</span>
          <span>Film Obsession Lore</span>
        </div>
        <h2><a href="/stories/${art.slug}">${art.title}</a></h2>
        <p>${art.excerpt}</p>
        <a class="story-read-link" href="/stories/${art.slug}">Read Story &rarr;</a>
      </div>
    </article>
  `).join("");

  const body = `
    <main class="stories-page" id="top">
      <section class="section stories-hero">
        <div class="band-head reveal">
          <p class="eyebrow">Cinema Lore &amp; Articles</p>
          <h1>The World of <em>Obsession</em></h1>
          <p class="section-lead">Explore the terrifying mythology of TABI Cat Curiosities, the psychology of Inde Navarrette's Nikki, and how the iconic One Wish Willow chocolate prop came to life.</p>
        </div>
      </section>

      <section class="section stories-grid-section">
        <div class="stories-grid">
          ${articleCards}
        </div>
      </section>

      <section class="section cta-section">
        <div class="cta-panel reveal">
          <p class="eyebrow">Experience the Prop Firsthand</p>
          <h2>Bring the Legend to Your Shelf.</h2>
          <p class="section-lead">Official screen-accurate One Wish Willow boxed set · Worldwide shipping via Stripe</p>
          <div class="cta-price" data-price-main>$26</div>
          <div class="hero-actions">
            <a class="button primary" href="/product">Order the Boxed Set</a>
            <a class="button secondary" href="/">Back to Home</a>
          </div>
        </div>
      </section>
    </main>
  `;

  return renderLayout({
    title: "Film Lore & Stories | One Wish Willow in Curry Barker's 'Obsession'",
    description: "Read behind-the-scenes stories, lore breakdowns, and collector guides for the One Wish Willow chocolate bar and cursed prop from the movie 'Obsession'.",
    keywords: "Obsession movie lore, One Wish Willow explained, Curry Barker Obsession articles, Inde Navarrette Nikki, TABI Cat Curiosities",
    canonical: "https://onewishwillow.com/stories",
    structuredData,
    body
  });
}
