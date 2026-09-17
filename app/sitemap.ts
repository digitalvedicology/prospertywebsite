import type { MetadataRoute } from 'next'
import { getServices, getPosts, getAllCategories } from '@/app/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.prospertyrealestate.com'
  const lastModified = new Date()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified,
    },
    {
      url: `${baseUrl}/about/`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified,
    },
    {
      url: `${baseUrl}/prosperty-team/`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/real-estate-services/`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified,
    },
    {
      url: `${baseUrl}/property-buy-in-chennai/`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/property-for-sale/`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/property-management-in-chennai/`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/blog/`,
      changeFrequency: 'daily',
      priority: 0.9,
      lastModified,
    },
    {
      url: `${baseUrl}/contact/`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/terms-and-conditions/`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified,
    },
  ]

  // Services
  const services = getServices()
  const servicesPages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    lastModified: new Date(service.modified || service.published || new Date()),
  }))

  // Blog posts
  const posts = getPosts()
  const postsPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}/`,
    changeFrequency: 'never' as const,
    priority: 0.5,
    lastModified: new Date(post.modified || post.published || new Date()),
  }))

  // Categories (first page only)
  const categories = getAllCategories()
  const categoriesPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}/`,
    changeFrequency: 'daily' as const,
    priority: 0.5,
    lastModified,
  }))

  return [
    ...mainPages,
    ...servicesPages,
    ...postsPages,
    ...categoriesPages,
  ]
}
