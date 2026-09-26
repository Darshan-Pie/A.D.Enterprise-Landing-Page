# A.D. Enterprises — Digital Product Catalog & Landing Page

A fast, responsive web application and landing page for **A.D. Enterprises**, designed for quick access to electrical product specifications, equipment catalogs, and digital brochures via QR code scanning.

---

## 🚀 Features

* 📱 **QR Code Optimized:** Fast-loading mobile layout tailored for on-site scanning and instant product viewing.
* 📄 **Digital Catalog & Specs:** High-resolution product showcase with integrated PDF viewing (`AD_ENTERPRISES.pdf`).
* 🎨 **Modern Design:** Built with a clean, industrial UI using Tailwind CSS and Next.js.
* ⚡ **Performance First:** Server-rendered and optimized for minimal load times on mobile networks.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & PostCSS
* **Deployment:** Vercel

---

## 📁 Project Structure

```text
├── public/
│   └── AD_ENTERPRISES.pdf    # Downloadable catalog & brochure
├── src/
│   └── app/
│       ├── globals.css       # Global styles & Tailwind imports
│       ├── layout.tsx        # Root application layout
│       └── page.tsx          # Main landing page view
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind styling theme setup
└── tsconfig.json             # TypeScript settings