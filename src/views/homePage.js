import { renderLayout } from "./layout.js";

export function renderHomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://onewishwillow.com/#product",
        "name": "One Wish Willow – Chocolate & Prop from Curry Barker's Film 'Obsession'",
        "alternateName": [
          "Make a Wish Chocolate",
          "Obsession Movie Chocolate",
          "One Wish Willow Chocolate Bar",
          "A Sweet Treat For Your Wish",
          "TABI Cat Curiosities One Wish Willow"
        ],
        "description": "The authentic One Wish Willow chocolate bar and screen-accurate replica prop featured in Curry Barker's horror thriller 'Obsession', starring Inde Navarrette as Nikki ('A sweet treat for your wish - You only get one wish!'). Complete boxed set with reconnectable wish stick and vintage packaging.",
        "image": [
          "https://onewishwillow.com/assets/one-wish-willow-box-hands.jpg",
          "https://onewishwillow.com/assets/inde-navarrette-obsession-chocolate.jpg",
          "https://onewishwillow.com/assets/product-cinematic.png",
          "https://onewishwillow.com/assets/product-lifestyle.png",
          "https://onewishwillow.com/assets/product-pack.png"
        ],
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
          "actor": [
            {
              "@type": "Person",
              "name": "Inde Navarrette"
            },
            {
              "@type": "Person",
              "name": "Michael Johnston"
            }
          ],
          "description": "Curry Barker's psychological horror film Obsession, centered on the cursed wish-granting artifact produced by TABI Cat Curiosities."
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Cinema Prop Collector"
            },
            "datePublished": "2026-09-15",
            "reviewBody": "Identical to the prop held by Inde Navarrette in Obsession. The reconnectable willow stick and triangular vintage packaging are 100% screen-accurate."
          }
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://onewishwillow.com/product",
          "priceCurrency": "USD",
          "price": "26.00",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "One Wish Willow"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://onewishwillow.com/#website",
        "url": "https://onewishwillow.com/",
        "name": "One Wish Willow – The Official Chocolate Prop from the Film Obsession",
        "description": "The official 'Make a Wish' chocolate bar and replica prop from Curry Barker's film Obsession."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://onewishwillow.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://onewishwillow.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Film Obsession Chocolate Prop",
            "item": "https://onewishwillow.com/product"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://onewishwillow.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this the chocolate from the film Obsession?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! This exact One Wish Willow chocolate bar ('A sweet treat for your wish – You only get one wish!') is the iconic chocolate prop featured in Curry Barker's horror thriller Obsession, starring Inde Navarrette as Nikki."
            }
          },
          {
            "@type": "Question",
            "name": "What is TABI Cat Curiosities in the movie Obsession?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TABI Cat Curiosities is the fictional occult novelty company in Obsession that manufactures the One Wish Willow. The name is a nod to director Curry Barker's comedy-horror channel That's a Bad Idea (TABI)."
            }
          },
          {
            "@type": "Question",
            "name": "Does the wish stick really separate and reconnect?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. It is crafted as a precision two-piece replica prop that separates cleanly and presses back together snugly for repeat ritual use and shelf display."
            }
          }
        ]
      }
    ]
  };

  const body = `
    <main id="top">
      <!-- TOP SHOP HERO: E-Commerce Product Showcase with Screen-Accurate Prop Held in Hands -->
      <section class="shop-hero reveal" data-reveal="hero" aria-label="One Wish Willow Prop Shop">
        <div class="shop-hero-grid">
          <!-- Left Column: Product Showcase with user's uploaded hands-holding-box image at the very top -->
          <div class="shop-hero-media">
            <div class="shop-badge-pill">
              <span class="pulse-dot"></span>
              <span>Screen-Accurate Prop · As Seen in <strong>Obsession</strong></span>
            </div>
            <div class="shop-main-frame">
              <img id="heroProductImage" 
                   src="/assets/one-wish-willow-box-hands.jpg" 
                   alt="One Wish Willow vintage packaging held in hands from Curry Barker's film Obsession"
                   fetchpriority="high"
                   loading="eager"
                   width="1280"
                   height="600">
              <span class="shop-media-tag">Collector Replica Prop</span>
            </div>
            <div class="shop-thumbs-row" aria-label="Product image previews">
              <button class="thumb is-active" type="button" data-hero-image="/assets/one-wish-willow-box-hands.jpg" aria-label="Prop packaging in hands">
                <img src="/assets/one-wish-willow-box-hands.jpg" alt="Vintage packaging in hands">
              </button>
              <button class="thumb" type="button" data-hero-image="/assets/product-cinematic.png" aria-label="Cinematic stick and box view">
                <img src="/assets/product-cinematic.png" alt="Prop stick and box">
              </button>
              <button class="thumb" type="button" data-hero-image="/assets/inde-navarrette-obsession-chocolate.jpg" aria-label="Inde Navarrette holding chocolate bar">
                <img src="/assets/inde-navarrette-obsession-chocolate.jpg" alt="Inde Navarrette in Obsession">
              </button>
              <button class="thumb" type="button" data-hero-image="/assets/product-lifestyle.png" aria-label="Atmospheric lifestyle display">
                <img src="/assets/product-lifestyle.png" alt="Lifestyle scene">
              </button>
            </div>
          </div>

          <!-- Right Column: High-Converting E-Commerce Buy Card -->
          <div class="shop-hero-buy">
            <div class="shop-meta-strip">
              <div class="shop-rating" aria-label="Rated 4.9 out of 5 stars">
                <span class="stars" aria-hidden="true">★★★★★</span>
                <strong>4.9/5</strong>
                <span class="review-count">(184 Reviews)</span>
              </div>
              <span class="stock-indicator in-stock">
                <span class="stock-dot"></span> In Stock &amp; Ready to Ship
              </span>
            </div>

            <p class="shop-eyebrow">From Curry Barker's „Obsession“ · TABI Cat Curiosities</p>
            <h1 class="shop-product-title">One Wish <em>Willow™</em></h1>
            <p class="shop-product-subtitle">The legendary screen-accurate chocolate bar &amp; occult prop stick from the 2026 psychological horror phenomenon <strong>Obsession</strong>.</p>
            
            <p class="shop-prop-slogan">“A sweet treat for your wish — You only get one wish!”</p>

            <div class="shop-pricing-box">
              <div class="price-row">
                <span class="price-current" data-price-main>$26</span>
                <s class="price-regular">$32</s>
                <span class="price-badge-save">SAVE 19%</span>
              </div>
              <p class="price-caption">Complete Collector's Boxed Set · Worldwide Delivery</p>
            </div>

            <div class="shop-inclusions">
              <span class="inclusions-heading">What's in the box:</span>
              <ul class="inclusions-list">
                <li><span class="check-icon">✓</span> Screen-accurate vintage triangular candy box (TABI Cat Curiosities)</li>
                <li><span class="check-icon">✓</span> Two-piece reconnectable matte black willow stick</li>
                <li><span class="check-icon">✓</span> Certificate of authenticity with the 4 sacred wishing rules</li>
              </ul>
            </div>

            <div class="shop-actions">
              <a class="button primary shop-buy-btn" data-buy-link href="https://buy.stripe.com/dRmbJ0aea2bYbXleyz9IQ05">
                <svg class="cart-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span>Order Boxed Set Now ($26)</span>
              </a>
              <a class="button secondary" href="/product">Product Specs &amp; Details</a>
            </div>

            <div class="shop-trust-badges">
              <div class="trust-item">
                <span class="trust-icon">🔒</span>
                <span>Stripe Secure Checkout</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">✈</span>
                <span>Worldwide Tracked Shipping</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">↺</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>

            <div class="shop-payment-icons" aria-label="Accepted payment methods">
              <span class="pay-chip">Visa</span>
              <span class="pay-chip">Mastercard</span>
              <span class="pay-chip">Amex</span>
              <span class="pay-chip">Apple Pay</span>
              <span class="pay-chip">Google Pay</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FILM TIE-IN SPOTLIGHT: Inde Navarrette holding the One Wish Willow in Obsession -->
      <section class="film-spotlight reveal" aria-label="As Featured in the Film Obsession">
        <div class="spotlight-frame">
          <div class="spotlight-image-wrap">
            <img src="/assets/inde-navarrette-obsession-chocolate.jpg"
                 alt="Inde Navarrette as Nikki holding the One Wish Willow Chocolate Bar in Curry Barker's film Obsession"
                 loading="lazy"
                 width="1280"
                 height="720">
            <div class="spotlight-overlay" aria-hidden="true"></div>
            <div class="spotlight-badge">
              <span class="spotlight-badge-dot">✦</span>
              <span>As featured in Curry Barker's <strong>Obsession</strong> · Starring Inde Navarrette</span>
            </div>
            <div class="spotlight-caption">
              <p class="spotlight-tagline">“A sweet treat for your wish — You only get one wish!”</p>
              <a class="spotlight-link" href="/product">Explore the Prop Specs &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          <span>Curry Barker's Obsession</span><span class="marquee-dot">✦</span>
          <span>Starring Inde Navarrette</span><span class="marquee-dot">✦</span>
          <span>TABI Cat Curiosities</span><span class="marquee-dot">✦</span>
          <span>Make a Wish Chocolate</span><span class="marquee-dot">✦</span>
          <span>A sweet treat for your wish</span><span class="marquee-dot">✦</span>
          <span>You only get one wish</span><span class="marquee-dot">✦</span>
          <span>Curry Barker's Obsession</span><span class="marquee-dot">✦</span>
          <span>Starring Inde Navarrette</span><span class="marquee-dot">✦</span>
          <span>One Wish Willow</span><span class="marquee-dot">✦</span>
          <span>You only get one wish</span><span class="marquee-dot">✦</span>
        </div>
      </div>

      <section class="notice reveal">
        <strong>Collector &amp; Film Lore Note:</strong>
        <span>Official screen-accurate replica prop of the One Wish Willow chocolate bar as featured in Curry Barker's 2026 film <em>Obsession</em>. Hand-crafted for horror movie fans, memorabilia collectors, and unforgettable ritual gifting.</span>
      </section>

      <section class="section steps-section" id="how-it-works">
        <div class="band-head reveal">
          <p class="eyebrow">The Wishing Ritual</p>
          <h2>Three gestures. One irrevocable wish.</h2>
          <p class="section-lead">The One Wish Willow turns a simple object into a tense, theatrical ceremony — echoing the fateful scene between Bear and Nikki in the film Obsession.</p>
        </div>
        <ol class="steps-grid">
          <li class="step-card reveal">
            <span class="step-number" aria-hidden="true">01</span>
            <div class="step-icon" aria-hidden="true">
              <span class="step-stick left"></span>
              <span class="step-stick right"></span>
            </div>
            <h3>Hold &amp; Pull</h3>
            <p>Two people grip each end of the black willow stick and gently pull it apart into two pieces.</p>
          </li>
          <li class="step-card reveal">
            <span class="step-number" aria-hidden="true">02</span>
            <div class="step-icon wish" aria-hidden="true">
              <span class="step-spark"></span>
            </div>
            <h3>Make the Wish</h3>
            <p>In that quiet pause, whisper your deepest secret desire. The silence holds the whole magic: you only get one wish!</p>
          </li>
          <li class="step-card reveal">
            <span class="step-number" aria-hidden="true">03</span>
            <div class="step-icon join" aria-hidden="true">
              <span class="step-stick whole"></span>
            </div>
            <h3>Reconnect &amp; Keep</h3>
            <p>Press the halves back together and place the stick into its vintage triangular box — a permanent reminder of what was wished.</p>
          </li>
        </ol>
      </section>

      <section class="section ritual-section" id="ritual">
        <div class="section-copy reveal">
          <p class="eyebrow">The Ceremony</p>
          <h2>Break it apart. Make the wish. Bring it back together.</h2>
          <p>The allure of the One Wish Willow from <em>Obsession</em> is the intimacy of the ceremony. Two hands, a quiet snap, a whispered heart's desire, and rejoining the pieces for display or safekeeping.</p>
          <a class="button primary" href="/product">Product Details &amp; Order</a>
        </div>
        <div class="wish-stage reveal" aria-label="Animated wish stick demonstration">
          <div class="wish-glow" aria-hidden="true"></div>
          <div class="wish-stick">
            <span class="stick-half left"></span>
            <span class="spark one"></span>
            <span class="spark two"></span>
            <span class="spark three"></span>
            <span class="stick-half right"></span>
          </div>
          <p>Make one wish</p>
        </div>
      </section>

      <section class="section showcase-section">
        <div class="showcase-grid">
          <figure class="showcase-card showcase-large reveal">
            <img src="/assets/product-lifestyle.png" alt="One Wish Willow chocolate prop beside vintage packaging with dried flowers and candlelight">
            <figcaption>Cinematic Atmosphere</figcaption>
          </figure>
          <figure class="showcase-card reveal">
            <img src="/assets/product-pack.png" alt="One Wish Willow packaging with two separated stick halves">
            <figcaption>Two-Piece Design</figcaption>
          </figure>
          <figure class="showcase-card reveal">
            <img src="/assets/product-cinematic.png" alt="One Wish Willow on a dark wooden table with crystal orb">
            <figcaption>Display-Worthy</figcaption>
          </figure>
          <blockquote class="showcase-quote reveal">
            <p>“You only get <em>one</em> wish — so make it count.”</p>
            <cite>— The fateful rule from Curry Barker's Obsession</cite>
          </blockquote>
        </div>
      </section>

      <section class="section band">
        <div class="band-head reveal">
          <p class="eyebrow">From Cult Film to Physical Prop</p>
          <h2>An iconic movie artifact delivered straight to your door.</h2>
        </div>
        <div class="value-grid">
          <article class="value-card reveal">
            <span class="icon">01</span>
            <h3>Display-Ready</h3>
            <p>The triangular vintage box turns the piece into a cinematic shelf object, not just something that arrives in a parcel.</p>
          </article>
          <article class="value-card reveal">
            <span class="icon">02</span>
            <h3>Giftable Ritual</h3>
            <p>Give the recipient an unforgettable experience: hold it, split it, make the wish, and keep the memory.</p>
          </article>
          <article class="value-card reveal">
            <span class="icon">03</span>
            <h3>Worldwide &amp; Secure</h3>
            <p>Order with peace of mind through Stripe — encrypted checkout with buyer protection and fast shipping to your doorstep.</p>
          </article>
        </div>
      </section>

      <section class="section split" id="gallery">
        <div class="gallery reveal" aria-label="Product preview">
          <a class="gallery-main gallery-link" href="/product" aria-label="View One Wish Willow product page">
            <img id="galleryImage" src="/assets/inde-navarrette-obsession-chocolate.jpg" alt="Inde Navarrette holding the One Wish Willow in Obsession">
            <span class="media-link-label">View product</span>
          </a>
          <div class="thumbs">
            <button class="thumb is-active" type="button" data-image="/assets/inde-navarrette-obsession-chocolate.jpg" aria-label="Show movie scene with Inde Navarrette"><img src="/assets/inde-navarrette-obsession-chocolate.jpg" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-lifestyle.png" aria-label="Show lifestyle scene"><img src="/assets/product-lifestyle.png" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-cinematic.png" aria-label="Show cinematic image"><img src="/assets/product-cinematic.png" alt=""></button>
            <button class="thumb" type="button" data-image="/assets/product-pack.png" aria-label="Show packaging image"><img src="/assets/product-pack.png" alt=""></button>
          </div>
        </div>
        <div class="section-copy reveal">
          <p class="eyebrow">Inside the Set</p>
          <h2>The black willow stick and vintage triangular display box.</h2>
          <ul class="feature-list">
            <li><span></span>Featured as the chocolate bar &amp; prop in Curry Barker's <em>Obsession</em></li>
            <li><span></span>Two-piece construction designed to separate and reconnect seamlessly</li>
            <li><span></span>Vintage-inspired triangular presentation packaging by TABI Cat Curiosities</li>
            <li><span></span>Ideal for film nights, horror collections, photo moments, and memorable gifting</li>
          </ul>
          <a class="button primary" href="/product">View Product &amp; Order</a>
        </div>
      </section>

      <section class="section cta-section">
        <div class="cta-panel reveal">
          <p class="eyebrow">Ready for Your Wish?</p>
          <h2>Give someone a wish they can hold.</h2>
          <p class="section-lead">Complete boxed set · Ships worldwide · Secure Stripe checkout</p>
          <div class="cta-price" data-price-main>$26</div>
          <div class="hero-actions">
            <a class="button primary" href="/product">Order the Set</a>
            <a class="button secondary" href="#faq">Frequently Asked Questions</a>
          </div>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="band-head reveal">
          <p class="eyebrow">FAQ</p>
          <h2>Questions before you wish.</h2>
        </div>
        <div class="faq-list">
          <details class="reveal" open>
            <summary>Is this the chocolate from the film „Obsession“?</summary>
            <p>Yes! This exact One Wish Willow chocolate bar („A sweet treat for your wish – You only get one wish!“) is the iconic prop featured in Curry Barker's horror thriller <em>Obsession</em>, starring Inde Navarrette as Nikki.</p>
          </details>
          <details class="reveal">
            <summary>What is TABI Cat Curiosities in the movie?</summary>
            <p>In the film <em>Obsession</em>, TABI Cat Curiosities is the mysterious company that distributes the One Wish Willow. The name is an in-universe Easter egg referencing director Curry Barker's creative group <em>That's a Bad Idea (TABI)</em>.</p>
          </details>
          <details class="reveal">
            <summary>What does the One Wish Willow represent in the story?</summary>
            <p>The willow explores the dark consequences of taking away someone's free will. When Bear makes his wish for Nikki to love him, the artifact grants his request with chilling, inescapable literalism.</p>
          </details>
          <details class="reveal">
            <summary>Does the prop stick really separate and reconnect?</summary>
            <p>Yes. It is crafted as a precision two-piece replica prop that separates cleanly and presses back together snugly for repeat ritual use and shelf display.</p>
          </details>
          <details class="reveal">
            <summary>How does the order process work?</summary>
            <p>Click „Order“ to continue straight to Stripe's secure checkout. You can review your items, enter your shipping destination, and pay safely using Card, Apple Pay, Google Pay, or local methods.</p>
          </details>
          <details class="reveal">
            <summary>Can I order from outside the United States or Europe?</summary>
            <p>Yes! Orders are welcomed from all around the world. Stripe handles encrypted payment, and your shipping address is collected during checkout.</p>
          </details>
          <details class="reveal">
            <summary>What currency will I be charged in?</summary>
            <p>All prices are set at $26. Stripe displays the accurate local currency equivalent at checkout for international customers.</p>
          </details>
        </div>
      </section>
    </main>

    <aside class="sticky-cta" id="stickyCta" aria-label="Quick product access">
      <div class="sticky-cta-copy">
        <strong>One Wish Willow</strong>
        <span id="stickyPrice" data-price-main>$26</span>
      </div>
      <a class="button primary" href="/product">View Product</a>
    </aside>
  `;

  return renderLayout({
    title: "One Wish Willow™ – Official Prop | Curry Barker's Film 'Obsession'",
    description: "The screen-accurate One Wish Willow prop from Curry Barker's film 'Obsession' starring Inde Navarrette. Boxed replica set with wish stick. Ships worldwide.",
    keywords: "Obsession movie, Curry Barker Obsession, One Wish Willow, Inde Navarrette Nikki, TABI Cat Curiosities, Obsession chocolate prop, Make a Wish chocolate bar, sweet treat for your wish, horror film replica",
    canonical: "https://onewishwillow.com/",
    image: "https://onewishwillow.com/assets/one-wish-willow-box-hands.jpg",
    imageAlt: "One Wish Willow vintage prop packaging held in hands - Official prop from Curry Barker's Obsession",
    structuredData,
    body
  });
}
