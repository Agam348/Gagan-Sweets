# Gagan Sweets, Rasoi And Bakers — Official Website

> **Location:** Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran Locality, Tarn Taran, Punjab  
> **Contact:** [098550 16191](tel:09855016191) / [+91 82853 91000](tel:+918285391000)  
> **Operating Hours:** Open Daily 10:00 AM – 10:00 PM  
> **Tech Stack:** Next.js 16 (Turbopack, App Router) • React 19 • TypeScript 5 • Tailwind CSS v4

---

## 📌 Project Overview & Design Philosophy

This repository contains the official website for **Gagan Sweets, Rasoi And Bakers**, a renowned culinary establishment in Tarn Taran, Punjab known for 100% pure desi ghee traditional mithai, a family dining rasoi buffet, street chaat, and custom celebration cakes.

### ⚠️ Critical Design Rules for Developers

1. **NO E-Commerce / Shopping Cart System:**  
   The shop owner is 60 years old and runs a high-volume, high-touch local operation. **Do not introduce checkout carts, payment gateways, or complex e-commerce funnels.** All customer conversions are designed for direct **phone calls**, **WhatsApp consultations**, and **in-person store visits**.

2. **Dignified Traditional Aesthetic (Avoid "Gen-Z" Clutter):**  
   - The visual style is rooted in Punjabi hospitality and heritage.
   - Use warm royal maroon (`#601212`), antique gold (`#c69229`), and soft warm cream (`#fdfbf7`).
   - Keep navigation simple, single-tier, and senior-friendly with generous font sizes, high contrast, and uncluttered whitespace.

3. **Real Photography Only:**  
   All food showcases in `public/assets/` use authentic images from the store's kitchen, bakery counter, and wedding gift boxes.

---

## 📂 Project Directory Structure

```text
Gagan_Sweets/
├── public/
│   └── assets/                    # Authentic shop photographs & brand logos
│       ├── gagan_sweets_logo.jpg  # High-res circular medallion brand crest
│       ├── logo.svg               # Vector brand crest
│       └── *.jpg / *.jpeg         # Sweets, Rasoi, Cakes & Wedding Hamper photos
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind CSS v4 theme, fonts & palette variables
│   │   ├── layout.tsx             # Root HTML layout & SEO metadata
│   │   └── page.tsx               # Main single-page landing structure
│   └── components/
│       ├── Navbar.tsx             # Single-tier clean header with direct call trigger
│       ├── Logo.tsx               # Scalable royal brand emblem component
│       ├── HeroSection.tsx        # Hero banner, verified ratings & call-to-action
│       ├── OfferingsSection.tsx   # Tabbed catalog (Mithai, Rasoi, Bakery, Hampers)
│       ├── WeddingInquirySection.tsx # Bulk wedding bhaji & celebration packaging
│       ├── AboutSection.tsx       # Heritage story & 100% Desi Ghee purity pledge
│       ├── LocationSection.tsx    # Address, timings, Google Maps embed & directions
│       └── Footer.tsx             # Traditional local business footer & credits
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & npm scripts
├── tsconfig.json                  # TypeScript compiler options
└── README.md                      # Developer documentation (this file)
```

---

## 🧩 Key Components Guide

| Component | Path | Purpose |
|---|---|---|
| `<Navbar />` | `src/components/Navbar.tsx` | Sticky single-row navigation with 4 clean links (`Sweets & Food`, `Wedding Boxes`, `About Us`, `Shop & Timings`), click-to-call button (`098550 16191`), and mobile drawer. |
| `<Logo />` | `src/components/Logo.tsx` | Reusable brand mark supporting `sm`, `md`, `lg`, and `xl` sizes in light/dark variants. |
| `<HeroSection />` | `src/components/HeroSection.tsx` | Welcoming hero section with verified social proof (Google 4.6★ dining, Zomato 4.5★ delivery), primary call actions, and traditional quality pillars. |
| `<OfferingsSection />` | `src/components/OfferingsSection.tsx` | Interactive tabbed showcase for 4 core categories: Pure Desi Ghee Mithai, Rasoi & Snacks, Fresh Bakery & Cakes, and Wedding Hampers. |
| `<WeddingInquirySection />` | `src/components/WeddingInquirySection.tsx` | Dedicated section for high-value wedding bhaji boxes, custom packaging, and bulk order consultation via WhatsApp. |
| `<AboutSection />` | `src/components/AboutSection.tsx` | Explains the brand's heritage, devotion to culinary hygiene, and farm-fresh desi ghee commitment. |
| `<LocationSection />` | `src/components/LocationSection.tsx` | Comprehensive contact card featuring shop address, Google Map embed, store hours, and quick navigation link. |
| `<Footer />` | `src/components/Footer.tsx` | Clean closing section with full address, phone links, opening hours, and back-to-top button. |

---

## 🎨 Theme & Typography

Custom fonts and color tokens are configured in `src/app/globals.css`:

- **Primary Colors:**
  - Royal Burgundy Maroon: `#601212` (`--maroon`)
  - Deep Maroon: `#4d0c0c` / `#581010` (`--maroon-dark`)
  - Antique Gold: `#c69229` (`--gold`)
  - Warm Saffron: `#e2b763` / `#dfb256` (`--gold-light`)
  - Soft Cream Canvas: `#fdfbf7` (`--background`)
- **Typography Classes:**
  - Headings & Royal Titles: `.font-serif-royal` (`Playfair Display`, serif)
  - Medallion & Crest Subtitles: `.font-brand-crest` (`Cinzel`, serif)
  - Body & UI Text: Standard sans-serif (`Plus Jakarta Sans` / system-ui)

---

## 🚀 Getting Started for Developers

### Prerequisites
- **Node.js:** 18.18.0 or newer (Node 20+ recommended)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### Installation

```bash
# 1. Clone or navigate to the repository
cd Gagan_Sweets

# 2. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app runs with Turbopack for near-instant hot module reloading.

### Building for Production

```bash
# Type check and generate optimized production build
npm run build

# Preview the production build locally
npm start
```

### Linting

```bash
npm run lint
```

---

## 🛠️ How to Make Common Updates

### 1. Adding or Modifying Food Items
Open `src/components/OfferingsSection.tsx`:
- Update the relevant array (`sweetsItems`, `rasoiItems`, `bakeryItems`, or `hamperItems`).
- Each item expects:
  ```typescript
  {
    name: "Item Name",
    desc: "Appetizing description of ingredients and preparation.",
    image: "/assets/filename.jpg",
    highlight: "100% Pure Desi Ghee" // Short badge label
  }
  ```

### 2. Updating Contact Information or Store Timings
Store details are centralized across:
- `src/components/Navbar.tsx` (Direct call button)
- `src/components/LocationSection.tsx` (Address card & timings)
- `src/components/Footer.tsx` (Footer contacts)

### 3. Adding New Images
- Save images inside `public/assets/`.
- When using Next.js `<Image />` with `fill`, always provide the `sizes` prop to optimize responsive image delivery and avoid performance warnings:
  ```tsx
  <Image
    src="/assets/your_new_image.jpg"
    alt="Descriptive alt text"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
  ```

---

## 📞 Verified Business Metadata Reference

- **Shop Name:** Gagan Sweets, Rasoi And Bakers
- **Address:** Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran Locality, Tarn Taran, Punjab
- **Primary Telephone:** `098550 16191`
- **Secondary / WhatsApp:** `+91 82853 91000`
- **WhatsApp Direct URL:** `https://wa.me/918285391000`
- **Timings:** 10:00 AM to 10:00 PM (All 7 Days)
- **Google Maps Query:** `Gagan Sweets Rasoi And Bakers Near Chaar Khamba Chowk Sarhali Road Tarn Taran`
