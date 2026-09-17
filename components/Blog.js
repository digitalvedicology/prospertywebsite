const featured = {
  image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
  tag: 'Apartment Buy',
  title: 'Discover the Prosperty Difference: Top Real Estate Agents in Chennai Guide Your Apartment Search',
  excerpt:
    "Navigating Chennai's Real Estate Landscape with Prosperty. Chennai's real estate market offers myriad opportunities for potential homeowners and investors alike. Yet, diving into the property market without expert guidance can be overwhelming. At Prosperty, our experienced team of real estate agents and advisors are dedicated to simplifying your apartment search journey. With 15+ years of expertise in Chennai's dynamic market, we provide personalized guidance, comprehensive market insights, and end-to-end support to help you find your perfect home with confidence and ease.",
  date: 'March 15, 2024',
  readTime: '5 min read',
}

const minis = [
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',
    tag: 'Buyer Guide',
    title: 'Your Apartment Search Simplified with Prosperty Real Estate Agents',
    date: 'March 12, 2024',
    readTime: '4 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop',
    tag: 'Market Insights',
    title: "Unlocking Chennai's Realty: The Pivotal Role of Real Estate Brokers",
    date: 'March 9, 2024',
    readTime: '6 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    tag: 'Apartment Buy',
    title: 'Experience Seamless Apartment-Buying with Prosperty Real Estate',
    date: 'March 7, 2024',
    readTime: '3 min read',
  },
]

function ArrowIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Blog() {
  return (
    <section className="latest-stories w-full" id="blog">
      <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)' }}>
        <div className="ls-head">
          <div>
            <span className="ls-eyebrow">Our Blog</span>
            <h2 className="ls-title">Latest Stories</h2>
            <p className="ls-sub">Insights and updates from Chennai&apos;s real estate market</p>
          </div>
          <a href="#" className="ls-all">
            View all stories
            <ArrowIcon />
          </a>
        </div>

        <div className="ls-grid">
          <article className="ls-card ls-featured">
            <a href="#" className="ls-media" aria-hidden="true" tabIndex={-1}>
              <img src={featured.image} alt="" loading="lazy" />
            </a>
            <div className="ls-body">
              <span className="ls-tag">{featured.tag}</span>
              <h3 className="ls-card-title">
                <a href="#">{featured.title}</a>
              </h3>
              <p className="ls-excerpt">{featured.excerpt}</p>
              <div className="ls-meta">
                <span>{featured.date}</span>
                <span className="ls-dot" aria-hidden="true"></span>
                <span>{featured.readTime}</span>
                <a href="#" className="ls-read">
                  Read article
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </article>

          <div className="ls-side">
            {minis.map((blog) => (
              <article key={blog.title} className="ls-card ls-mini">
                <a href="#" className="ls-media" aria-hidden="true" tabIndex={-1}>
                  <img src={blog.image} alt="" loading="lazy" />
                </a>
                <div className="ls-body">
                  <span className="ls-tag">{blog.tag}</span>
                  <h3 className="ls-card-title">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <div className="ls-meta">
                    <span>{blog.date}</span>
                    <span className="ls-dot" aria-hidden="true"></span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
