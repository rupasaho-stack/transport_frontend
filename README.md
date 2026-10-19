# TruckLink

TruckLink is a Next.js App Router website for connecting freight drivers and companies.

## Requirements

- Node.js 18.17 or newer
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create and validate a production build |
| `npm run start` | Serve the production build |

## Project structure

```text
app/                  App Router pages and shared global styles
  companies/          Company landing page
  contact/            Contact page
  drivers/            Driver landing page
  features/           Product features page
  login/              Login page
  pricing/            Pricing page
components/           Shared navigation, hero, cards, and form components
public/               Static images and other public assets
```

Static files in `public/` are served from the site root. For example, `public/hero.jpg` is available as `/hero.jpg`.

## Technology

- Next.js 14
- React 18
- JavaScript
# transport_frontend
