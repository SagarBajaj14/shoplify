# 🛒 Real-Time Full Stack E-Commerce App with Next.js 15

A full production-ready, real-time full-stack e-commerce application built with cutting-edge technologies like **Next.js 15**, **Sanity**, **Clerk**, **Stripe**, and more. Designed with sleek animations, real-time updates, robust state management, and beautiful UI/UX powered by **Shadcn/ui** and **Tailwind CSS**.

---

## 🚀 Features

- ✅ Real-Time Sanity CMS Integration
- ✅ Clerk Authentication with Passkeys
- ✅ Full Stripe Checkout & Webhook Integration
- ✅ Advanced Animations with Framer Motion
- ✅ State Management using Zustand
- ✅ Real-Time Content Editing with Sanity Visual Editor
- ✅ Fully Responsive UI/UX with Shadcn & Tailwind CSS
- ✅ Full TypeScript Support
- ✅ Vercel Deployment Ready
- ✅ Live Debugging & Developer Troubleshooting Tips

---

## 🧱 Tech Stack

- **Framework**: Next.js 15 (App Router, Server Actions)
- **CMS**: Sanity.io (with Live Content API)
- **Auth**: Clerk (with Passkey support)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Payment**: Stripe
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Deployment**: Vercel
- **Type Safety**: TypeScript

---

## Application Architecture & Workflow

### 🧭 CMS & Backend Content Layer

- A dedicated **Sanity Studio** is set up to manage all backend content, including products, categories, orders, and sales.
- Custom Sanity Schemas define the structure for:
  - Products (title, description, price, images, availability, etc.)
  - Categories (name, slug, image)
  - Orders (user data, items, timestamps)
  - Sales (discounts, banners, coupon codes)
- Sanity TypeGen is used to auto-generate TypeScript types from the CMS schema.
- Live content updates are handled using Sanity’s Live Content API and WebSocket features for real-time syncing.

---

### 🔐 Authentication

- **Clerk** handles user authentication, registration, and session management.
- Passkey support (WebAuthn) is integrated for passwordless sign-in.
- Middleware enforces route protection for authenticated areas like checkout and orders.
- Clerk hooks are used in the frontend to retrieve and display user data.

---

### 🛍️ Frontend Interface

- Built with **Next.js 15 App Router** using Server Components and Server Actions for API logic.
- **Shadcn/ui** and **Tailwind CSS** power the design system with responsive, accessible UI components.
- Global state is managed using **Zustand**, especially for basket/cart functionality.
- Framer Motion is used for smooth page transitions, hover effects, and modals.

---

### 🔎 Dynamic Pages & Components

- Product Grid, Thumbnail, and Product View components fetch data using GROQ queries to Sanity.
- Pages are dynamically routed and statically generated where possible for performance.
- Category pages filter products based on selected category with real-time updates.
- Search functionality is implemented for live filtering of product data.

---

### 🧺 Basket & Checkout Logic

- Zustand manages the basket state (add/remove items, quantities, totals).
- Server Actions handle core logic like validating product availability and creating Stripe sessions.
- Clerk session data is linked with user orders for authenticated experiences.

---

### 💸 Payments & Orders

- Stripe Checkout is fully integrated for processing orders securely.
- Stripe Webhooks are set up to handle payment confirmations and update the Sanity CMS with completed order data.
- A Success page displays post-purchase information.
- Authenticated users can view their past orders through a dedicated Orders page.

---

### 🎨 Real-Time Editing & Live Features

- Sanity’s Real-Time Visual Editor enables content editors to preview and edit live content directly on the site.
- Caching strategies are applied where appropriate to balance performance and freshness of content.

---

### ☁️ Deployment

- The application is fully optimized and deployed on **Vercel**.
- Environment variables manage secrets for Sanity, Clerk, and Stripe securely via `.env.local`.

## 📦 Installation

### 1. Clone the repo

- `git clone https://github.com/SagarBajaj14/shoplify.git`

- `cd shoplify`

### 2. Install dependencies
- `npm install`

### 3. Setup environment variables
### Create a .env.local file in the root directory and add the following:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key`
- `CLERK_SECRET_KEY=your_clerk_secret_key`
- `SANITY_PROJECT_ID=your_sanity_project_id`
- `SANITY_DATASET=production`
- `STRIPE_SECRET_KEY=your_stripe_secret_key`

### 4. Start development server
- `npm run dev`

## References for the build

```
1. https://docs.stripe.com/testing - Test Credit Card Details
2. https://docs.stripe.com/ - Stripe Documentation
3. https://clerk.com/docs - Clerk Documentation
4. https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing - Visual Editing Documentation
5. https://www.sanity.io/docs - Sanity Documentation
6. https://vercel.com/docs/getting-started-with-vercel - Vercel Documentation
7. https://ui.shadcn.com/docs - Shadcn Documentation
8. https://zustand.docs.pmnd.rs/getting-started/introduction - Zustand Documentation
