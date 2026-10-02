import { renderLayout } from "./layout.js";

export function renderProductPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "One Wish Willow – Chocolate & Prop from Curry Barker's Film 'Obsession'",
    "alternateName": [
      "Make a Wish Chocolate",
      "Obsession Movie Chocolate",
      "One Wish Willow Chocolate Bar",
      "TABI Cat Curiosities One Wish Willow"
    ],
    "image": [
      "https://onewishwillow.com/assets/inde-navarrette-obsession-chocolate.jpg",
      "https://onewishwillow.com/assets/product-cinematic.png",
      "https://onewishwillow.com/assets/product-lifestyle.png",
      "https://onewishwillow.com/assets/product-pack.png"
    ],
    "description": "The authentic One Wish Willow chocolate bar and screen-accurate replica prop featured in Curry Barker's horror hit 'Obsession' ('A sweet treat for your wish - You only get one wish!'). Complete boxed set with reconnectable wish stick and vintage packaging by TABI Cat Curiosities.",
    "brand": {
      "@type": "Brand",
      "name": "TABI Cat Curiosities / One Wish Willow"
    },
    "isRelatedTo": {
      "@type": "Movie",
      "name": "Obsession",
      "director": {
        "@type": "Person",
        "name": "Curry Barker"
      },
      "actor": {
        "@type": "Person",
        "name": "Inde Navarrette"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://onewishwillow.com/product",
      "priceCurrency": "USD",
      "price": "26.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "One Wish Willow"
      }
    }
  };

  const body = `
    <main>
      <section class="section product-page">
        <div class="gallery reveal" aria-label="Product gallery">
          <button class="gallery-main" type="button" aria-label="Change product view">
            <img id="galleryImage" src="/assets/inde-navarrette-obsession-chocolate.jpg" alt="Inde Navarrette holding the One Wish Willow Chocolate Bar in Obsession">
          </button>
          <div class="thumbs">
            <button class="thumb is-active" type="button" data-image="/assets/inde-navarrette-obsession-chocolate.jpg" aria-label="Inde Navarrette in Obsession"><img src="/assets/inde-navarrette-obsession-chocolate.jpg" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-cinematic.png" aria-label="Cinematic prop view"><img src="/assets/product-cinematic.png" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-lifestyle.png" aria-label="Lifestyle and vintage box"><img src="/assets/product-lifestyle.png" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-pack.png" aria-label="Two-piece prop stick"><img src="/assets/product-pack.png" alt=""></button>
          </div>
        </div>

        <div class="product-buy reveal">
          <p class="eyebrow">From Curry Barker's „Obsession“ · TABI Cat Curiosities</p>
          <h1>One Wish <em>Willow</em></h1>
          <p class="lead">The authentic screen-accurate black wish stick with vintage triangular display box as seen in the psychological horror phenomenon <strong>Obsession</strong>. Known as the fateful <em>„Make a Wish“</em> chocolate bar (<em>„A sweet treat for your wish – You only get one wish!“</em>).</p>
          <p class="price-block">
            <span class="price-main" id="unitPrice" data-price-main>$26</span>
            <small>per boxed set · secure Stripe checkout</small>
          </p>
          <ul class="trust-badges" aria-label="Checkout trust signals">
            <li>Ships worldwide</li>
            <li>Stripe secure checkout</li>
            <li>Card, Apple Pay &amp; Google Pay</li>
          </ul>
          <div class="hero-actions">
            <a class="button primary" data-buy-link href="#">Order This Product</a>
            <a class="button secondary" href="#details">View Details</a>
          </div>
          <div class="mini-specs">
            <span>Two-piece prop</span>
            <span>Reconnectable</span>
            <span>Triangular gift box</span>
          </div>
        </div>
      </section>

      <section class="section ritual-section" id="details">
        <div class="section-copy reveal">
          <p class="eyebrow">Product Details</p>
          <h2>Crafted around an iconic piece of modern horror cinema.</h2>
          <p>Featured in key scenes with Bear (Michael Johnston) and Nikki (Inde Navarrette), the One Wish Willow blends mid-century confectionery nostalgia with supernatural dread. Designed to sit pride of place on your shelf, in a display case, or as an interactive party centerpiece.</p>
          <ul class="feature-list">
            <li><span></span>Includes one black two-piece One Wish Willow replica prop stick</li>
            <li><span></span>Includes one custom printed triangular vintage-style presentation box</li>
            <li><span></span>Accurately reproduces the TABI Cat Curiosities graphics from the film</li>
            <li><span></span>Screen-accurate friction connector allows separation and rejoining</li>
          </ul>
        </div>
        <div class="wish-stage reveal" aria-label="Animated wish demonstration">
          <div class="wish-glow" aria-hidden="true"></div>
          <div class="wish-stick">
            <span class="stick-half left"></span>
            <span class="spark one"></span>
            <span class="spark two"></span>
            <span class="spark three"></span>
            <span class="stick-half right"></span>
          </div>
          <p>Separate, wish, reconnect</p>
        </div>
      </section>

      <section class="section band" id="security">
        <div class="band-head reveal">
          <p class="eyebrow">Worldwide Ordering</p>
          <h2>Trusted checkout for film lovers everywhere.</h2>
        </div>
        <div class="value-grid">
          <article class="value-card reveal">
            <span class="icon">01</span>
            <h3>Ships Worldwide</h3>
            <p>Orders are shipped worldwide. Stripe securely collects your delivery details during checkout.</p>
          </article>
          <article class="value-card reveal">
            <span class="icon">02</span>
            <h3>Encrypted Stripe Checkout</h3>
            <p>Your payment is processed through Stripe with industry-leading encryption and buyer protection.</p>
          </article>
          <article class="value-card reveal">
            <span class="icon">03</span>
            <h3>Transparent Pricing</h3>
            <p>What you see is what Stripe charges: $26 worldwide. Limited-time visitors receive 15% off.</p>
          </article>
        </div>
      </section>
    </main>
  `;

  return renderLayout({
    title: "One Wish Willow Chocolate Prop | Replica & Box from Curry Barker's 'Obsession'",
    description: "Order the official One Wish Willow chocolate bar & prop from Curry Barker's movie Obsession. The 'Make a Wish' set with replica stick and vintage display box. Fast worldwide shipping.",
    keywords: "Obsession movie chocolate, One Wish Willow Curry Barker, Make a Wish Chocolate, Inde Navarrette Nikki prop, TABI Cat Curiosities, You only get one wish",
    canonical: "https://onewishwillow.com/product",
    structuredData,
    body
  });
}
