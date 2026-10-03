# Tula's International School (TIS) Landing Page Redesign

> Transform the existing TIS homepage content into an animated, modern, high-converting landing page. Retaining the authentic TIS brand identity (**Crimson `#991b1b`**, **Gold `#fbbf24`**, **Dark Navy `#0b0f19`**) and original verified copy (sports list, campus stats, parent reviews, rankings).

---

## 🌟 Standout Features

### 1. Top Reading Scroll Progress Bar (`ScrollProgress.jsx`)
- Seamlessly tracks viewport scrolling via Framer Motion's `useScroll()` and `useSpring()`.
- Renders a fixed top progress line that expands smoothly with spring physics (`stiffness: 100`, `damping: 30`) across a Crimson-to-Gold glow gradient as the user explores down the page.

### 2. Scroll-Triggered Reveals (`Reveal.jsx`)
- Wraps section cards, stats, badges, and text blocks using Framer Motion's `whileInView`.
- Configured with `viewport={{ once: true }}` to animate elements into view at 60 FPS without causing re-triggering lag or layout shift during reverse scrolling.

---

## 🏗️ Technical Architecture & Stack

| Component | Choice | Reason |
| :--- | :--- | :--- |
| **Framework** | **React 18+ (Vite)** | Ultra-fast bundling, minimal overhead, rapid setup and zero-lag rendering. |
| **Styling** | **Pure CSS3 + CSS Variables** | Full design control, smooth responsive grid/flexbox layouts, no utility framework configuration needed. |
| **Animations** | **Framer Motion** | 60 FPS motion drivers for scroll tracking, modal transitions, and entrance animations. |
| **Icons** | **Lucide React** | Lightweight SVG icon primitives (`Phone`, `Award`, `CheckCircle`, `Trophy`, `Trees`, `HeartPulse`, `Users`, etc.). |
| **Deployment** | **Vercel / Netlify** | Automated CI/CD build pipeline directly from GitHub repository. |

---

## 📁 File Architecture

```plaintext
tis-redesign/
├── index.html                  # SEO meta tags, Google Fonts (Outfit & Plus Jakarta Sans), favicon
├── package.json                # React 18, Vite, Framer Motion, Lucide React
├── vite.config.js              # Vite React configuration
├── src/
│   ├── index.css               # CSS variables, glassmorphism, responsive grid/flex layouts, media queries
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Main page component assembling all sections & interactive modals
│   ├── components/
│   │   ├── ScrollProgress.jsx  # Feature 1: Top reading progress bar (useScroll + useSpring)
│   │   └── Reveal.jsx          # Feature 2: Scroll reveal wrapper (whileInView, once: true)
│   └── data/
│       └── tisData.js          # Extracted JSON data (Campus stats, Rankings, 16+ Sports, Testimonials)
└── README.md                   # Project documentation, architecture & deployment guide
```

---

## 📄 Page Component Breakdown

1. **Navigation (Glass Header)**: Fixed blurred glass header with brand crest logo, quick phone contact link (`tel:+919837983791`), interactive **Enquire Now** CTA button, and mobile hamburger drawer.
2. **Hero Section**: Primary value proposition headline (*Where Ancient Gurukul Wisdom Meets Modern Global Excellence*), admissions status beacon badge (`Admissions Open 2025-26`), direct CTAs (*Apply for Admissions*, *Watch Virtual Tour*), and trust pill metrics.
3. **Campus Highlights**: 4-card responsive metric grid showcasing core metrics:
   - **22+ Acres** Lush Himalayan Campus
   - **16+ Olympic Sports** Facilities
   - **24/7** Resident Medical Care & Hospital Tie-up
   - **6:1** Student-to-Teacher Ratio
4. **Rankings & Awards**: National board school rankings (#1 Co-Ed Boarding School in Dehradun by EducationWorld, #1 Residential School in North India by Outlook I-CARE, Top 5 in India by Education Today).
5. **Sports Showcase**: Filterable badge grid listing all 16+ sports facilities available on campus (Horse Riding, 10m Shooting Range, Semi-Olympic Pool, Archery, Lawn Tennis, Football Stadium, Cricket Oval, Squash, Badminton, Basketball, Taekwondo, Skating, etc.).
6. **Parent Testimonials**: 2-column parent review cards highlighting school feedback, ratings (5 stars), parent names, and student grades.
7. **Interactive Admission Enquiry Modal**: High-converting multi-field inquiry modal with instant validation and confirmation screen.
8. **Footer**: Clean copyright, campus address on Chakrata Road (Dehradun), quick links, office hours, and policy notes.

---

## 🚀 Local Setup & Development

### Prerequisites
- Node.js (v18+ or v20+)
- npm or yarn

### Installation & Run

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd tis-redesign

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` to preview the landing page.

### Build Test

To test production build:
```bash
npm run build
```
This produces optimized production assets in the `dist/` folder with zero errors.

---

## 🌐 Live Deployment Guide (Vercel & Netlify)

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete TIS landing page redesign"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Vercel will build and assign a live production URL (e.g., `https://tis-redesign.vercel.app`).

### Option B: Deploy to Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com/).
2. Select **"Import an existing project"** -> **GitHub**.
3. Set Build command: `npm run build`
4. Set Publish directory: `dist`
5. Click **Deploy Site**.

---

## 📋 Google Form Submission Checklist

- [x] Local build verified (`npm run build` succeeds with zero errors)
- [x] Responsive layout verified at 375px (Mobile), 768px (Tablet), and 1280px+ (Desktop)
- [x] Framer Motion top progress bar & scroll reveals implemented
- [x] Authentic TIS brand colors (Crimson, Gold, Dark Navy) retained
- [x] Push to Public GitHub Repository
- [x] Live Deployment Link (Vercel / Netlify)
- [x] Form submission with GitHub link & Live URL
