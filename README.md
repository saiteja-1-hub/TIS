# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage ([tis.edu.in](https://tis.edu.in/)) focusing on high conversion, fluid 60 FPS animations, and seamless mobile responsiveness.

---

## 🚀 Live Demo & Submission Details

- **Live URL:** [Insert Vercel / Netlify Deployed Link Here]
- **Repository:** [Insert Public GitHub Repository Link Here]
- **Google Form Submission:** [https://forms.gle/1njGvsG8a2MW8cRR7](https://forms.gle/1njGvsG8a2MW8cRR7)

---

## 🛠️ Tech Stack

| Layer | Choice | Details |
| :--- | :--- | :--- |
| **Framework** | **React 18+ (Vite)** | Ultra-fast bundling, minimal overhead, rapid setup and zero-lag rendering. |
| **Styling** | **Pure CSS3 + CSS Variables** | Full design control, glassmorphism, responsive flex/grid layouts, no utility framework overhead. |
| **Animations** | **Framer Motion** | 60 FPS motion drivers for scroll tracking, spring-physics cursor follower, modals, and entrance reveals. |
| **Icons** | **Lucide React** | Lightweight SVG primitives (`Phone`, `Award`, `CheckCircle`, `Trophy`, `Trees`, `HeartPulse`, `Users`, `Sun`, `Moon`, etc.). |
| **Deployment** | **Vercel / Netlify** | Automated CI/CD build pipeline connected directly to the GitHub repository. |

---

## ✨ Standout Features Implemented

All 4 bonus features from the specification have been incorporated:

1. **Custom Cursor (`CustomCursor.jsx` + `useMousePosition.js`)**:
   - Interactive mouse-follower ring with inner dot driven by Framer Motion's `useSpring()` to eliminate layout thrashing.
   - Smoothly scales, expands, and changes color when hovering over interactive targets (`<a>`, `<button>`, inputs, and preview cards).
   - Automatically disabled on touch screens via `@media (pointer: coarse)` and touch detection.

2. **Top Reading Scroll Progress Bar (`ScrollProgress.jsx`)**:
   - Tracks viewport scrolling via Framer Motion's `useScroll()` and `useSpring()`.
   - Renders a fixed top progress line that expands smoothly across a Crimson-to-Gold glow gradient as the user explores down the page.

3. **Scroll-Triggered Reveals (`Reveal.jsx`)**:
   - Wraps section cards, stats, badges, and text blocks using Framer Motion's `whileInView`.
   - Configured with `viewport={{ once: true }}` to animate elements into view at 60 FPS without re-triggering lag during reverse scrolling.

4. **Animated Dark/Light Theme Switcher (`ThemeToggle.jsx` + `useTheme.js`)**:
   - Interactive animated toggle with rotating Sun/Moon iconography.
   - Switches between the authentic TIS Dark Navy theme (`#0b0f19`) and a crisp Pearl Light theme (`#f8fafc`).
   - Retains persistent user choice via `localStorage`.

---

## 📦 Getting Started Locally

### 1. Clone the repository:
```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production:
```bash
npm run build
```
Production assets are generated in `dist/` with **zero errors**.

---

## 🏗️ Component Architecture Overview

Structured modularly in compliance with professional engineering standards:

```plaintext
src/
├── components/
│   ├── ui/               # Reusable atomic UI components (Button.jsx, Badge.jsx, Card.jsx)
│   ├── layout/           # Global layouts (Navbar.jsx, Footer.jsx, MobileNav.jsx)
│   ├── sections/         # Feature sections (HeroSection, HighlightsSection, RankingsSection,
│   │                     #   SportsSection, AboutSection, TestimonialsSection, CTASection,
│   │                     #   EnquireModal.jsx, TourModal.jsx)
│   └── animation/        # Motion drivers (ScrollProgress.jsx, Reveal.jsx, CustomCursor.jsx, ThemeToggle.jsx)
├── hooks/                # Custom React hooks (useMousePosition.js, useTheme.js)
├── data/                 # Extracted verified TIS data (tisData.js)
└── index.css             # CSS variables, glassmorphism, responsive grid & media queries
```

---

## 🎨 Brand Identity Retained

- **Authentic Brand Colors:** Crimson `#991b1b`, Gold `#fbbf24`, Dark Navy `#0b0f19`.
- **Original Copy & Stats:**
  - **22+ Acres** Pollution-free Himalayan Campus in Dehradun.
  - **16+ Olympic Sports** (Equestrian Horse Riding, 10m Shooting Range, Semi-Olympic Pool, Archery, Lawn Tennis, Football, Squash, Badminton, etc.).
  - **24/7 Medical Assistance** with resident infirmary and superspeciality hospital tie-up.
  - **6:1 Student-to-Teacher Ratio** for personalized mentorship.
  - **Accredited Rankings:** #1 Co-Ed Boarding School in Dehradun (EducationWorld), #1 Residential School in North India (Outlook I-CARE).
  - **Verified Parent Testimonials:** Real parent reviews highlighting Gurukul values and academic results.
  - **Direct Admissions Desk:** Quick phone link (`tel:+919837983791`).

---

## 🌐 Live Deployment Guide

### Deploying to Vercel
1. Push repository code to GitHub:
   ```bash
   git add .
   git commit -m "feat: modular high-converting TIS homepage with standout animations"
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/), select **"Add New Project"** and import the GitHub repository.
3. Framework Preset: **Vite** (auto-detected).
4. Click **Deploy**.

### Deploying to Netlify
1. Connect repository in [Netlify](https://app.netlify.com/).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**.

---

## 📋 Submission Checklist

- [x] Project builds locally without errors (`npm run build` succeeds).
- [x] All 4 standout features (Custom Cursor, Scroll Reveal, Theme Switcher, Scroll Progress Bar) implemented and tested.
- [x] Clean modular component breakdown (`ui/`, `layout/`, `sections/`, `animation/`, `hooks/`).
- [x] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- [x] Tested and verified responsive layouts at 375px (Mobile), 768px (Tablet), and 1280px+ (Desktop).
- [x] Zero unused dependencies or dead code.
- [x] Public GitHub repository ready.
- [x] Google Form ready: [https://forms.gle/1njGvsG8a2MW8cRR7](https://forms.gle/1njGvsG8a2MW8cRR7).
