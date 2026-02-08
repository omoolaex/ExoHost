import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://exohost.com.ng'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Protect backend routes
          '/_next/',       // Next.js internal files
          '/admin/',       // Future admin panel
          '/dashboard/',   // Future user dashboard
          '/privacy-policy-draft', // Example of unlisted pages
          'https://clients.exohost.com.ng/admin', // Block admin portal
        ],
      },
      {
        // Block lower-quality "Scraper" bots while allowing Google/Bing
        userAgent: ['GPTBot', 'CCBot'], 
        disallow: ['/'], 
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}