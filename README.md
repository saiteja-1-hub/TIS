# Tulas International School – Homepage Redesign

This is a redesign of the Tulas International School website (tis.edu.in). I built it using React and Vite, with a focus on making it look clean, modern, and easy to use on any device.

---

## What I used

- **React 18 + Vite** – for building the UI and fast development
- **Pure CSS** – all styling is done with plain CSS and CSS variables, no Tailwind or any utility framework
- **Framer Motion** – for smooth animations and scroll effects
- **Lucide React** – for simple, clean icons throughout the page

---

## Features

- Custom animated cursor that follows the mouse
- Scroll progress bar at the top of the page
- Smooth section reveal animations as you scroll down
- Dark / Light theme toggle that saves your preference

---

## How to run it locally

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd client
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

To build for production:

```bash
npm run build
```

---

## Project structure

```
src/
├── components/
│   ├── ui/          – small reusable components
│   ├── layout/      – Navbar, Footer, MobileNav
│   ├── sections/    – each page section as its own file
│   └── animation/   – cursor, scroll bar, reveal, theme toggle
├── hooks/           – custom React hooks
├── data/            – all the school data in one place
└── index.css        – all styles
```

---

## Deploying

**Vercel:**
1. Push your code to GitHub
2. Import the repo on vercel.com
3. It auto-detects Vite – just hit Deploy

**Netlify:**
1. Connect your GitHub repo on netlify.com
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Hit Deploy

---

That's pretty much it. The site includes all the real school info – campus stats, sports facilities, rankings, parent reviews, and an admissions enquiry form.
