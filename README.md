# Next.js Mastery

A hands-on collection of Next.js projects built while learning the App Router,
routing, layouts, image and font optimization, and client-side navigation.

## Projects

### `level-1`

Small, focused examples for core Next.js concepts:

- App Router and nested routes
- Dynamic and catch-all routes
- Loading and not-found UI
- Optimized local images with `next/image`
- Self-hosted Google fonts with `next/font`

### `practice-project1`

A Travel Guide application that applies the Level 1 concepts in one project.

Current routes:

| Route | Description |
| --- | --- |
| `/` | Travel Guide home page |
| `/destination` | List of available destinations |
| `/destination/[city]` | Dynamic destination detail page |
| `/about` | About page |
| `/contact` | Contact page |

The navigation bar highlights the currently active route. Destination cards link
to dynamic URLs such as `/destination/Paris` and `/destination/Tokyo`.

## Getting started

Each folder is an independent Next.js application. Run the commands from the
project you want to start.

```bash
cd level-1
npm install
npm run dev
```

Or start the Travel Guide:

```bash
cd practice-project1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Useful commands

```bash
npm run dev    # Start the development server
npm run lint   # Check code quality
npm run build  # Create a production build
npm run start  # Run the production build
```

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS 4
