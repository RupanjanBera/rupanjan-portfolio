# Rupanjan Bera — Portfolio

Premium personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your DeepSeek API key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

Get your API key at [https://platform.deepseek.com/](https://platform.deepseek.com/)

**Important:** Never commit `.env.local` or expose your API key in frontend code.

## Editing Content

All portfolio content is data-driven and easy to edit:

| File | What to edit |
|------|-------------|
| `src/data/site.ts` | Hero, about, contact, education, achievements |
| `src/data/projects.ts` | Project cards and featured projects |
| `src/data/caseStudies.ts` | Detailed case study pages |
| `src/data/skills.ts` | Skills section |
| `src/data/timeline.ts` | Journey timeline |
| `src/data/blog.ts` | Blog/notes cards |
| `src/data/portfolioKnowledge.ts` | AI assistant knowledge base |

## Features

- Dark mode by default with theme toggle
- Framer Motion animations and section reveals
- Ctrl+K command menu for quick navigation
- Project filter by category (AI, Web, Business, Maker)
- Portfolio AI assistant powered by DeepSeek API
- Dedicated case study pages for each project
- Fully responsive, mobile-first design
- SEO optimized metadata

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                  # Next.js pages and API routes
│   ├── api/portfolio-ai/ # Secure DeepSeek API proxy
│   ├── case-studies/     # Case study pages
│   └── blog/             # Blog placeholder pages
├── components/
│   ├── ai/               # Portfolio AI chat
│   ├── layout/           # Navbar, Footer, CommandMenu
│   ├── projects/         # Project cards
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── data/                 # Editable content files
└── lib/                  # Utilities and rate limiting
```

## Deploy

Deploy to Vercel, Netlify, or any Node.js hosting. Set `DEEPSEEK_API_KEY` as an environment variable in your hosting dashboard.

## License

Personal portfolio — all rights reserved.