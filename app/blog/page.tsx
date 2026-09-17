import type { Metadata } from 'next'
import Link from 'next/link'
import { getPaginatedPosts, getAllCategories } from '@/app/lib/content'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Real Estate Blog | Prosperty Insights & Articles',
  description:
    'Real estate tips, market insights, and guides from Prosperty advisors covering Chennai property buying, selling, and investment strategies.',
  alternates: {
    canonical: 'https://www.propertyrealestate.com/blog/',
  },
}

export default function BlogPage() {
  const { posts, total, pages } = getPaginatedPosts(1, 12)
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Prosperty Blog
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            Real estate insights, market trends, and expert advice for property buyers and investors in Chennai.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog/"
              className="px-4 py-2 bg-gold text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}/`}
                className="px-4 py-2 border-2 border-gold text-gold rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
              >
                {cat.slug}
              </Link>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 overflow-hidden flex items-center justify-center">
                {/* TODO: replace image */}
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
                  alt={post.heading}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {post.categories.length > 0 && (
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                    {post.categories[0]}
                  </p>
                )}
                <h3 className="text-lg font-serif font-bold text-ink mb-2 line-clamp-2 hover:text-gold transition-colors">
                  <Link href={`/${post.slug}/`}>{post.heading}</Link>
                </h3>
                {post.published && (
                  <p className="text-xs text-gray-500 mb-4">
                    {new Date(post.published).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                )}
                <Link
                  href={`/${post.slug}/`}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:text-ink transition-colors text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <span className="text-gray-600">
              Page 1 of {pages}
            </span>
            {pages > 1 && (
              <Link
                href="/blog/page/2/"
                className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Next →
              </Link>
            )}
          </div>
        )}

        <p className="text-center text-gray-600 mt-12">
          Showing {posts.length} of {total} articles
        </p>
      </div>
    </div>
  )
}
