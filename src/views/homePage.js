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
      <!-- TOP SPOTLIGHT: Inde Navarrette holding the One Wish Willow in Obsession -->
      <section class="film-spotlight reveal" data-reveal="hero" aria-label="As Featured in the Film Obsession">
        <div class="spotlight-frame">
          <div class="spotlight-image-wrap">
            <img src="/assets/inde-navarrette-obsession-chocolate.jpg"
                 alt="Inde Navarrette as Nikki holding the One Wish Willow Chocolate Bar in Curry Barker's film Obsession"
                 fetchpriority="high"
                 loading="eager"
                 width="1280"
                 height="720">
            <div class="spotlight-overlay" aria-hidden="true"></div>
            <div class="spotlight-badge">
              <span class="spotlight-badge-dot">✦</span>
              <span>As featured in Curry Barker's <strong>Obsession</strong> · Starring Inde Navarrette</span>
            </div>
            <div class="spotlight-caption">
              <p class="spotlight-tagline">“A sweet treat for your wish — You only get one wish!”</p>
              <a class="spotlight-link" href="/product">Explore the Prop &amp; Order &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section class="hero">
        <a class="hero-media hero-media-link reveal" href="/product" data-reveal="hero" aria-label="View One Wish Willow product page">
          <div class="hero-media-frame"></div>
          <div class="hero-shimmer" aria-hidden="true"></div>
          <img src="/assets/product-cinematic.png" alt="One Wish Willow prop stick and vintage packaging from the film Obsession">
          <span class="media-link-label">View product</span>
        </a>
        <div class="hero-copy">
          <p class="eyebrow reveal" data-reveal="hero">From Curry Barker's „Obsession“ · TABI Cat Curiosities</p>
          <h1 class="reveal" data-reveal="hero">One Wish <em>Willow</em></h1>
          <p class="lead reveal" data-reveal="hero">The legendary chocolate bar &amp; occult prop from the psychological horror hit <strong>Obsession</strong>. Inscribed with the unforgettable rule: <em>„A sweet treat for your wish – You only get one wish!“</em>. Separate the black willow stick, whisper your wish, and press the two halves back together.</p>
          <div class="hero-actions reveal" data-reveal="hero">
            <a class="button primary" href="/product">Claim Your Prop Set</a>
            <a class="button secondary" href="#how-it-works">Learn the Ritual</a>
          </div>
          <dl class="trust-strip reveal" data-reveal="hero" aria-label="Product highlights">
            <div><dt data-price-main>$26</dt><dd>Complete boxed set</dd></div>
            <div><dt>Ships worldwide</dt><dd>International orders welcome</dd></div>
            <div><dt>Secure checkout</dt><dd>Encrypted Stripe payment</dd></div>
          </dl>
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
    title: "One Wish Willow | Official Chocolate Prop from Curry Barker's Film 'Obsession'",
    description: "The authentic One Wish Willow chocolate bar & prop from Curry Barker's film 'Obsession' starring Inde Navarrette: 'A sweet treat for your wish – You only get one wish!'. Order the boxed set.",
    keywords: "Obsession movie chocolate, One Wish Willow Curry Barker, Inde Navarrette Nikki, TABI Cat Curiosities, Obsession film prop, Make a Wish Chocolate, sweet treat for your wish",
    canonical: "https://onewishwillow.com/",
    structuredData,
    body
  });
}
