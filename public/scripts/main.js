import { shopConfig } from "./config.js";

const { priceUsd, discountPercent, discountMinutes, stripePaymentUrl } = shopConfig;
const DISCOUNT_KEY = "oww_discount_ends";

document.querySelectorAll("[data-buy-link]").forEach((element) => {
  element.href = stripePaymentUrl;
});

document.querySelectorAll(".thumb").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    document.querySelectorAll(".thumb").forEach((thumb) => thumb.classList.remove("is-active"));
    button.classList.add("is-active");
    const galleryImage = document.querySelector("#galleryImage");
    if (!galleryImage) return;

    galleryImage.classList.add("is-changing");
    window.setTimeout(() => {
      galleryImage.src = button.dataset.image;
      galleryImage.classList.remove("is-changing");
    }, 180);
  });
});

initMobileNav();
initPricing();
initDiscountTimer();
initStickyCta();
initScrollReveal();
initHeaderScroll();

function formatUsd(amount) {
  const rounded = Math.round(amount * 100) / 100;
  return rounded % 1 === 0 ? `$${rounded}` : `$${rounded.toFixed(2)}`;
}

function getPrices(discounted) {
  const markup = 1 + discountPercent / 100;
  const fullUsd = priceUsd * markup;

  const sale = formatUsd(priceUsd);
  const full = formatUsd(fullUsd);

  if (discounted) {
    return { current: sale, original: full, discounted: true };
  }

  return { current: full, original: null, discounted: false };
}

function initPricing() {
  const priceElements = document.querySelectorAll("[data-price-main]");
  const stickyPrice = document.querySelector("#stickyPrice");
  const discountActive = isDiscountActive();

  if (!priceElements.length) return;

  const { current, original, discounted } = getPrices(discountActive);

  priceElements.forEach((element) => {
    if (discounted && original) {
      element.innerHTML = `<s class="price-was">${original}</s><span class="price-now">${current}</span>`;
      element.classList.add("has-discount");
    } else {
      element.textContent = current;
      element.classList.remove("has-discount");
    }
  });

  if (stickyPrice) {
    if (discounted && original) {
      stickyPrice.innerHTML = `<s class="price-was">${original}</s><span class="price-now">${current}</span>`;
      stickyPrice.classList.add("has-discount");
    } else {
      stickyPrice.textContent = current;
      stickyPrice.classList.remove("has-discount");
    }
  }
}

function getDiscountEnd() {
  const stored = localStorage.getItem(DISCOUNT_KEY);
  if (stored) return Number(stored);

  const endsAt = Date.now() + discountMinutes * 60 * 1000;
  localStorage.setItem(DISCOUNT_KEY, String(endsAt));
  return endsAt;
}

function isDiscountActive() {
  return Date.now() < getDiscountEnd();
}

function initDiscountTimer() {
  const banner = document.querySelector("#discountBanner");
  const timerEl = document.querySelector("#discountTimer");
  if (!banner || !timerEl) return;

  const endsAt = getDiscountEnd();

  function tick() {
    const remaining = endsAt - Date.now();

    if (remaining <= 0) {
      banner.hidden = true;
      banner.classList.remove("is-active");
      initPricing();
      return;
    }

    banner.hidden = false;
    banner.classList.add("is-active");
    initPricing();

    const totalSeconds = Math.floor(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    window.setTimeout(tick, 1000);
  }

  tick();
}

function initMobileNav() {
  const toggle = document.querySelector("#navToggle");
  const nav = document.querySelector("#mobileNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

function initStickyCta() {
  const sticky = document.querySelector("#stickyCta");
  const hero = document.querySelector(".hero");
  if (!sticky || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle("is-visible", !entry.isIntersecting);
  }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

  observer.observe(hero);
}

function initHeaderScroll() {
  const header = document.querySelector("#siteHeader");
  if (!header) return;

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initScrollReveal() {
  const heroReveals = document.querySelectorAll("[data-reveal='hero']");
  heroReveals.forEach((element, index) => {
    window.setTimeout(() => element.classList.add("is-visible"), 120 + index * 110);
  });

  const scrollReveals = document.querySelectorAll(".reveal:not([data-reveal='hero'])");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -48px 0px" });

  scrollReveals.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
    observer.observe(element);
  });
}
