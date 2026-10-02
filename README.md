# One Wish Willow Shop

Single-product shop for a cinematic replica prop: a black wish stick that separates, reconnects, and ships in a vintage-style display box.

Orders are handled entirely through a [Stripe Payment Link](https://buy.stripe.com/dRmbJ0aea2bYbXleyz9IQ05). Stripe collects customer details, processes payment, and stores orders in your Stripe dashboard.

## Start

```powershell
node server.js
```

If port 3000 is already in use:

```powershell
$env:PORT="3001"; node server.js
```

## Pages

- Landing page: `http://localhost:3000/`
- Product page: `http://localhost:3000/product.html`
- Success page: `http://localhost:3000/success.html`
- Cancel page: `http://localhost:3000/cancel.html`

## Stripe Setup

1. Use your existing payment link in `public/scripts/config.js` (`stripePaymentUrl`).
2. In the Stripe dashboard, set the payment link success URL to `https://your-domain.com/success.html`.
3. Set the cancel URL to `https://your-domain.com/cancel.html`.
4. View orders, customer details, and shipping addresses in the Stripe dashboard.

No server-side API, Supabase, webhooks, or admin panel are required for this setup.

## Deploy

The site is static HTML, CSS, and JavaScript. You can deploy the `public/` folder to any static host, or run `node server.js` on your own server.

If you change the Stripe payment link later, update `public/scripts/config.js`.
