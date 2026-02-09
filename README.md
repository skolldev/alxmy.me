# alxmy.me

Personal portfolio site.

## Stack

- Tailwind CSS v4
- Eleventy

## Development

The project uses tailwind & postcss for the styles, eleventy for the site, and satori & resvg for the open graph images.

Locally watch mode, builds css and runs the site:

```bash
npm run dev
```

## Deployment

```bash
npm run build
```

This will build css, site and use `generate-og.js` to generate the open graph images with satori & resvg.

The built site is in the `_site` directory.

Deploy to a static site host of your choice like Cloudflare Pages, Vercel, Netlify, etc.
