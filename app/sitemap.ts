import { MetadataRoute } from 'next'

// Auto-update every 1 hour
export const revalidate = 3600 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://exohost.com.ng'

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/web-hosting', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/domain-registration', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/whois-lookup', priority: 0.6, changeFrequency: 'always' },
    { url: '/website-builder', priority: 0.8, changeFrequency: 'monthly' },
    
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }))

  return routes
}