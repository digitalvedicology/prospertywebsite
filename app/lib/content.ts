import { Content, Post, Service, Page } from '@/app/lib/types'
import contentData from '@/app/lib/content-data.json'

const allContent = contentData as Content[]

// Fix typos
function cleanContent(content: Content): Content {
  let markdown = content.content_markdown
  markdown = markdown.replace(/PROSPERRTY/g, 'PROSPERTY')
  markdown = markdown.replace(/Advisoroffering/g, 'Advisor offering')
  return { ...content, content_markdown: markdown }
}

export function getAllContent(): Content[] {
  return allContent.map(cleanContent)
}

export function getBySlug(slug: string): Content | undefined {
  return allContent.find((c) => c.slug === slug) && cleanContent(allContent.find((c) => c.slug === slug)!)
}

export function getByPath(path: string): Content | undefined {
  return allContent.find((c) => c.path === path) && cleanContent(allContent.find((c) => c.path === path)!)
}

export function getPages(): Page[] {
  return allContent.filter((c) => c.type === 'page').map(cleanContent) as Page[]
}

export function getServices(): Service[] {
  return allContent.filter((c) => c.type === 'service').map(cleanContent) as Service[]
}

export function getPosts(): Post[] {
  return allContent
    .filter((c) => c.type === 'post')
    .map(cleanContent)
    .sort((a, b) => {
      const dateA = new Date((a as Post).published || '').getTime()
      const dateB = new Date((b as Post).published || '').getTime()
      return dateB - dateA
    }) as Post[]
}

export function getPostsByCategory(category: string): Post[] {
  return getPosts().filter((post) => post.categories.includes(category))
}

export function getPostsByTag(tag: string): Post[] {
  return getPosts().filter((post) => {
    const tagPath = `/tag/${tag}/`
    // Tags are stored as archive entries with their slug in the path
    return post.path.includes(tag)
  })
}

export function getPostsByAuthor(author: string): Post[] {
  return getPosts().filter((post) => {
    const authorPath = `/author/${author}/`
    // Authors are stored as archive entries
    return post.path.includes(author)
  })
}

export function getRelatedPosts(post: Post, limit: number = 3): Post[] {
  if (post.categories.length === 0) return []

  const related = getPosts()
    .filter((p) => p.slug !== post.slug && p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, limit)

  return related
}

export function getAllPostSlugs(): string[] {
  return getPosts().map((post) => post.slug)
}

export function getAllServiceSlugs(): string[] {
  return getServices().map((service) => service.slug)
}

export function getAllCategories(): Array<{ slug: string; path: string }> {
  const categories = new Set<string>()
  getPosts().forEach((post) => {
    post.categories.forEach((cat) => categories.add(cat))
  })
  return Array.from(categories).map((cat) => ({
    slug: cat,
    path: `/category/${cat}/`,
  }))
}

export function getAllTags(): Array<{ slug: string; path: string }> {
  return allContent
    .filter((c) => c.type === 'archive' && c.path.startsWith('/tag/'))
    .map((c) => ({
      slug: c.slug,
      path: c.path,
    }))
}

export function getAllAuthors(): Array<{ slug: string; path: string }> {
  return allContent
    .filter((c) => c.type === 'archive' && c.path.startsWith('/author/'))
    .map((c) => ({
      slug: c.slug,
      path: c.path,
    }))
}

export function getPaginatedPosts(page: number, perPage: number = 12): {
  posts: Post[]
  total: number
  pages: number
  currentPage: number
} {
  const posts = getPosts()
  const total = posts.length
  const pages = Math.ceil(total / perPage)
  const start = (page - 1) * perPage
  const end = start + perPage

  return {
    posts: posts.slice(start, end),
    total,
    pages,
    currentPage: page,
  }
}

export function getStaticParams() {
  const services = getServices()
  const posts = getPosts()
  const pages = getPages()

  return {
    services: services.map((s) => ({ slug: s.slug })),
    posts: posts.map((p) => ({ slug: p.slug })),
    pages: pages
      .filter((p) => p.slug !== '' && p.slug !== 'blog' && p.slug !== 'contact-2') // Exclude homepage and special pages
      .map((p) => ({ slug: p.slug })),
  }
}
