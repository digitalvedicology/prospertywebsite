import Link from 'next/link'
import { getRelatedPosts } from '@/app/lib/content'
import { Post } from '@/app/lib/types'

interface RelatedPostsProps {
  post: Post
  limit?: number
}

export default function RelatedPosts({ post, limit = 3 }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(post, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-300">
      <h2 className="text-2xl font-serif font-bold text-ink mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((relPost) => (
          <article
            key={relPost.slug}
            className="bg-cream rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
              {/* TODO: replace image */}
              <img
                src={`https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80`}
                alt={relPost.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              {relPost.categories.length > 0 && (
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                  {relPost.categories[0]}
                </p>
              )}
              <h3 className="text-lg font-serif font-bold text-ink mb-2 line-clamp-2">
                {relPost.heading}
              </h3>
              {relPost.published && (
                <p className="text-xs text-gray-500 mb-3">
                  {new Date(relPost.published).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              )}
              <Link
                href={`/${relPost.slug}/`}
                className="inline-flex items-center gap-2 text-gold font-semibold hover:text-ink transition-colors text-sm"
              >
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
