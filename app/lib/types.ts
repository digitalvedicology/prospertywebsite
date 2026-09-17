export type ContentType = 'page' | 'service' | 'post' | 'archive'
export type ArchiveType = 'category' | 'tag' | 'author'

export interface Content {
  path: string
  old_url: string
  type: ContentType
  slug: string
  heading: string
  seo_title: string
  meta_description: string | null
  categories: string[]
  published: string | null
  modified: string | null
  word_count: number
  content_markdown: string
}

export interface Post extends Content {
  type: 'post'
  published: string
  modified: string
  categories: string[]
}

export interface Service extends Content {
  type: 'service'
}

export interface Page extends Content {
  type: 'page'
}

export interface Archive extends Content {
  type: 'archive'
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface NavigationConfig {
  main: NavigationItem[]
  footer?: NavigationItem[]
}

export interface SiteConfig {
  name: string
  tagline: string
  url: string
  address: string
  phone: string[]
  email: string
  offices: {
    name: string
    location: string
    address: string
  }[]
  social?: {
    instagram?: string
    facebook?: string
    linkedin?: string
  }
}

export interface MetaDescriptions {
  [slug: string]: string
}
