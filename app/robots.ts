import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/*?*sort=', // Prevent crawling sorted/filtered pages
      ],
    },
    sitemap: 'https://www.propertyrealestate.com/sitemap.xml',
  }
}
