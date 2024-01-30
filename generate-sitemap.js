const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // If you need to fetch dynamic routes

const BASE_URL = 'https://www.yourdomain.com';
const PAGES = [
  '/',
  '/about',
  '/contact',
  // Add other static routes here
];

async function generateSitemap() {
  // Fetch dynamic routes, if any, e.g., blog posts
  const dynamicRoutes = await fetch('https://api.yourdomain.com/posts')
    .then(res => res.json())
    .then(posts => posts.map(post => `/posts/${post.slug}`));

  const allRoutes = [...PAGES, ...dynamicRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`)
  .join('')}
</urlset>`;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
}

generateSitemap();
