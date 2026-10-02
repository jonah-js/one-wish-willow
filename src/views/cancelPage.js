import { renderLayout } from "./layout.js";

export function renderCancelPage() {
  const body = `
    <main class="status-panel">
      <p class="eyebrow">Checkout cancelled</p>
      <h1>Your payment was not completed.</h1>
      <p>You can return to the product page and try again whenever you are ready.</p>
      <a class="button primary" data-buy-link href="#">Try Again</a>
      <a class="button secondary" href="/product">Back to Product</a>
    </main>
  `;

  return renderLayout({
    title: "Checkout Cancelled | One Wish Willow",
    description: "Your payment was not completed.",
    noIndex: true,
    isStatusPage: true,
    body
  });
}
