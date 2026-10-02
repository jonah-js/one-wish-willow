import { renderLayout } from "./layout.js";

export function renderSuccessPage() {
  const body = `
    <main class="status-panel">
      <p class="eyebrow">Thank you</p>
      <h1>Your order has been received.</h1>
      <p>Your payment was completed successfully through Stripe. Your One Wish Willow replica set from Curry Barker's film Obsession is being prepared for shipment.</p>
      <a class="button primary" href="/">Back to Home</a>
    </main>
  `;

  return renderLayout({
    title: "Order Received | One Wish Willow",
    description: "Thank you for ordering the One Wish Willow chocolate replica prop from the movie Obsession.",
    noIndex: true,
    isStatusPage: true,
    body
  });
}
