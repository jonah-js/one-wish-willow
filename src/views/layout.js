export function renderLayout({
  title,
  description,
  keywords,
  canonical,
  structuredData,
  body,
  noIndex = false,
  isStatusPage = false
}) {
  const robotsTag = noIndex
    ? '<meta name="robots" content="noindex, follow">'
    : '<meta name="robots" content="index, follow, max-image-preview:large">';

  const canonicalTag = canonical
    ? `<link rel="canonical" href="${canonical}">`
    : "";

  const jsonLdTag = structuredData
    ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
    : "";

  const headerContent = isStatusPage
    ? ""
    : `
    <aside class="discount-banner" id="discountBanner" hidden aria-label="Limited time offer">
      <span class="discount-badge">15% off</span>
      <span class="discount-copy">Your wish price ends in</span>
      <span class="discount-timer" id="discountTimer">60:00</span>
    </aside>

    <header class="site-header" id="siteHeader">
      <a class="brand" href="/" aria-label="One Wish Willow Home">
        <span class="brand-mark">OW</span>
        <span>One Wish Willow</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="/product">Product</a>
        <a href="/#how-it-works">The Ritual</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#faq">FAQ</a>
      </nav>
      <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <a class="nav-cta" href="/product">View Product</a>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
        <a href="/product">Product</a>
        <a href="/#how-it-works">The Ritual</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#faq">FAQ</a>
      </nav>
    </header>
  `;

  const footerContent = isStatusPage
    ? ""
    : `
    <footer class="site-footer">
      <div class="footer-wrap">
        <div class="footer-brand">
          <strong>One Wish Willow</strong>
          <p>The Official Chocolate Prop from Curry Barker's Film <em>Obsession</em> · Produced by TABI Cat Curiosities</p>
        </div>
        <div class="footer-links">
          <a href="/product">Product</a>
          <a href="/#faq">FAQ</a>
          <a href="/impressum">Impressum</a>
        </div>
      </div>
    </footer>
  `;

  const bodyClass = isStatusPage ? 'class="center-page"' : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${title}</title>
    <meta name="description" content="${description}">
    ${keywords ? `<meta name="keywords" content="${keywords}">` : ""}
    ${robotsTag}
    ${canonicalTag}

    <!-- Open Graph -->
    <meta property="og:type" content="product">
    <meta property="og:site_name" content="One Wish Willow | Obsession Movie Prop Shop">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical || "https://onewishwillow.com/"}">
    <meta property="og:image" content="https://onewishwillow.com/assets/inde-navarrette-obsession-chocolate.jpg">
    <meta property="og:image:alt" content="Inde Navarrette holding the One Wish Willow Chocolate Bar in Curry Barker's film Obsession">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="https://onewishwillow.com/assets/inde-navarrette-obsession-chocolate.jpg">

    <!-- Structured Data for Google SEO -->
    ${jsonLdTag}

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles/main.css?v=13">
  </head>
  <body ${bodyClass}>
    <div class="ambient" aria-hidden="true"></div>
    ${headerContent}
    ${body}
    ${footerContent}
    <script src="/scripts/main.js?v=13" type="module"></script>
  </body>
</html>`;
}
