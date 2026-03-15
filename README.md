# Rajan Pantha — Portfolio

A modern, animated portfolio website built with **Next.js**, **React**, **TailwindCSS**, and **Framer Motion**.

## Features

- Dark theme with custom design tokens and CSS variables
- Smooth scroll animations and hover effects (Framer Motion)
- Responsive design (Desktop 1440px+, Laptop 1024px, Tablet 768px, Mobile 375px)
- Typing animation in the hero section
- Active section highlighting in the navbar
- Animated mobile navigation menu
- Contact form
- Project cards with hover overlays
- Blog post cards
- Skills categorized by type
- Performance optimized with lazy-loaded images

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [React 19](https://react.dev/) — UI library
- [TailwindCSS 4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion 12](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Project Structure

```
src/
├── app/           # Next.js app router (layout, page, globals.css)
├── components/    # Reusable components (Navbar, Footer)
│   └── ui/        # UI primitives (Button, Card, SectionWrapper)
├── sections/      # Page sections (Hero, About, Skills, Projects, Blog, Contact)
├── data/          # Site content data (siteData.ts)
├── hooks/         # Custom React hooks
├── styles/        # Design tokens
└── utils/         # Utility functions (cn)
public/
└── assets/        # Static assets (images, SVGs)
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Deployment

### Deploy to Vercel

1. Push the code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will automatically detect the Next.js framework
4. Click **Deploy**

Or use the Vercel CLI:

```bash
npx vercel
```

## Customization

Edit `src/data/siteData.ts` to update:
- Personal information (name, description, email)
- Social links (GitHub, LinkedIn, Twitter)
- Skills and technologies
- Projects
- Blog posts
- Navigation links

Design tokens are in `src/app/globals.css` (CSS variables) and `src/styles/tokens.ts`.
