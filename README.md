# Halliday Website

Professional website for Halliday, an AI consultancy helping small businesses overcome their fear of AI.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images (Logo.jpg, Hero.png)
├── components/      # Reusable Astro components
├── content/blog/    # Markdown blog posts (content collection)
├── data/            # TypeScript data files (services, FAQs, testimonials, nav)
├── layouts/         # Base HTML layout
├── pages/           # File-based routing
│   ├── index.astro        # Homepage
│   ├── about.astro        # About page
│   ├── services.astro     # Services page
│   ├── contact.astro      # Contact page
│   └── resources/         # Blog listing + dynamic posts
└── styles/          # Global CSS with Tailwind config
```

## Brand Colors

Extracted from Logo.jpg and Hero.png:

| Token        | Hex       | Usage                     |
|-------------|-----------|---------------------------|
| Charcoal    | `#2D3436` | Primary text, dark sections |
| Navy        | `#1E3A5F` | Secondary dark, gradients   |
| Gold        | `#D4A03A` | Accent, CTAs, highlights    |
| Light Blue  | `#60A5FA` | Supporting accent           |

## Contact Form

The contact form submits to [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` in `src/components/ContactForm.astro` with your Formspree form ID.

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with this frontmatter:

```md
---
title: "Your Post Title"
description: "Brief description"
date: "2025-01-25"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

This is a static site. Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
