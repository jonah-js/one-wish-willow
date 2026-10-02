export function renderLayout({
  title,
  description,
  keywords,
  canonical,
  structuredData,
  body,
  image,
  imageAlt,
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
    <div class="store-announcement-bar" aria-label="Store Announcement">
      <div class="announcement-content">
        <span>✦ OFFICIAL FILM PROP STORE</span>
        <span class="announcement-sep">·</span>
        <span>CURRY BARKER'S OBSESSION</span>
        <span class="announcement-sep">·</span>
        <span>WORLDWIDE TRACKED SHIPPING</span>
        <span class="announcement-sep">·</span>
        <span>STRIPE SECURE</span>
      </div>
    </div>

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
        <a href="/product">Shop Prop</a>
        <a href="/#how-it-works">The Ritual</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#faq">FAQ</a>
      </nav>
      <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <a class="nav-cta" href="/product" data-buy-link>Order Prop ($26)</a>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
        <a href="/product">Shop Prop</a>
        <a href="/#how-it-works">The Ritual</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#faq">FAQ</a>
        <a class="button primary mobile-cta" href="/product" data-buy-link style="margin-top: 14px;">Order Prop ($26)</a>
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

  const ogImg = image || "https://onewishwillow.com/assets/one-wish-willow-box-hands.jpg";
  const ogAlt = imageAlt || "One Wish Willow Prop Set from Curry Barker's Obsession";

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

    <!-- Favicon & Mobile Touch Icons for Google Search Impressions & Browsers -->
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="theme-color" content="#30090d">
    <meta name="msapplication-TileColor" content="#30090d">

    <!-- Open Graph for Rich Social & Search Snippets -->
    <meta property="og:type" content="product">
    <meta property="og:site_name" content="One Wish Willow | Obsession Prop Replica Shop">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical || "https://onewishwillow.com/"}">
    <meta property="og:image" content="${ogImg}">
    <meta property="og:image:alt" content="${ogAlt}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${ogImg}">

    <!-- Structured Data for Google SEO Rich Results -->
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
