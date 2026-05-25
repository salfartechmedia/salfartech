# Salfartech — Next.js Website

A professional corporate website for Salfartech Digital Marketing Agency built with **Next.js 14**, **TypeScript**, and custom CSS-in-JS theming.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
salfartech/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Base CSS reset
├── components/
│   ├── GlobalStyles.tsx    # Dynamic theme-aware CSS
│   ├── Logo.tsx            # SVG Logo component
│   ├── Navbar.tsx          # Sticky navbar with theme toggle
│   ├── Hero.tsx            # Hero section with stats
│   ├── Marquee.tsx         # Scrolling marquee
│   ├── Services.tsx        # Services grid
│   ├── Solutions.tsx       # Industries served
│   ├── Process.tsx         # 6-step process
│   ├── Team.tsx            # Team profiles (Co-founders + employee)
│   ├── WhyUs.tsx           # Why Salfartech + metrics
│   ├── Testimonials.tsx    # Client reviews
│   ├── Portfolio.tsx       # Case studies
│   ├── Pricing.tsx         # Pricing plans
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer with links
├── lib/
│   ├── theme.ts            # DARK/LIGHT theme tokens + data constants
│   └── ThemeContext.tsx    # React context for theme state
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Features

- ✅ **Dark / Light Theme** toggle with smooth transitions
- ✅ **Fully Responsive** — mobile, tablet, desktop
- ✅ **Team Profiles** — Salman Ansari, Farhan Ansari (Co-Founders), Mohd Tauheed
- ✅ **Custom SVG Logo** with gradient design
- ✅ **9 Sections** — Hero, Services, Solutions, Process, Team, Why Us, Testimonials, Portfolio, Pricing, CTA, Footer
- ✅ **SEO Ready** — Next.js metadata API
- ✅ **Google Fonts** — Outfit + Lora via next/font
- ✅ **TypeScript** throughout
- ✅ **Animations** — fade-up, float, shimmer, marquee

---

## 🛠 Tech Stack

| Tech          | Purpose                        |
|---------------|-------------------------------|
| Next.js 14    | Framework (App Router)         |
| TypeScript    | Type safety                    |
| React 18      | UI library                     |
| next/font     | Google Fonts (Outfit + Lora)   |
| CSS-in-JS     | Dynamic theme-aware styles     |

---

## 🌐 Deployment

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder or connect your Git repo
```

---

## ✏️ Customization

- **Theme colors** → `lib/theme.ts` (DARK / LIGHT objects)
- **Team members** → `lib/theme.ts` (TEAM_MEMBERS array)
- **Services** → `lib/theme.ts` (SERVICES array)
- **Contact info** → `components/Sections2.tsx` (CTA & Footer)
- **Logo** → `components/Logo.tsx`

---

Made with ❤️ by **Salfartech**
# salfartech
# salfartech
# salfartech
