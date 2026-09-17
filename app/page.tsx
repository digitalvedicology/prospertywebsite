import type { Metadata } from 'next'
import Link from 'next/link'
import { getServices, getPosts } from '@/app/lib/content'
import ScrollAnimations from '@/app/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Prosperty Real Estate Advisors | Chennai',
  description:
    'Prosperty Real Estate Advisors – research-based property buying, selling and investment advisory services across Chennai. 15+ years of trusted expertise.',
}

export default function Home() {
  const posts = getPosts()
  const services = [
    {
      slug: 'residential-real-estate-services',
      heading: 'Residential Real Estate Services',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
      description: 'Discover your ideal home in Chennai with our premier Residential Real Estate Services.',
    },
    {
      slug: 'commercial-real-estate-services',
      heading: 'Commercial Real Estate Services',
      image: 'https://i.pinimg.com/736x/75/b4/bc/75b4bc924b8e4eafd068de073667380a.jpg',
      description: 'Exceptional opportunities for your business with our premier Commercial Real Estate Services.',
    },
    {
      slug: 'investment-advisory-services',
      heading: 'Real Estate Investment Advisory',
      image: 'https://i.pinimg.com/1200x/8e/6f/d4/8e6fd464e4e82475f2126818dd9598c3.jpg',
      description: 'Maximize your real estate investments with our expert Real Estate Investment Advisory Services.',
    },
    {
      slug: 'real-estate-valuation-advisory',
      heading: 'Real Estate Valuation & Advisory',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop',
      description: 'Our Real Estate Valuation & Advisory services offer precise property valuation and market analysis.',
    },
    {
      slug: 'real-estate-legal-documentation',
      heading: 'Real Estate Legal & Documentation',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
      description: 'Ensure a smooth real estate transaction with our expert legal and documentation services.',
    },
    {
      slug: 'nri-real-estate-services',
      heading: 'NRI Real Estate Services',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
      description: 'Explore hassle-free property transactions in India with our dedicated NRI Real Estate Services.',
    },
    {
      slug: 'real-estate-research-services',
      heading: 'Real Estate Research Services',
      image: 'https://i.pinimg.com/736x/06/41/31/0641318031d3bc8bf0bc3f25e699d9a3.jpg',
      description: 'Stay ahead in the real estate market with our cutting-edge Real Estate Research Services.',
    },
    {
      slug: 'real-estate-taxation',
      heading: 'Real Estate Taxation',
      image: 'https://i.pinimg.com/736x/75/b4/bc/75b4bc924b8e4eafd068de073667380a.jpg',
      description: 'Optimize your real estate investments with our expert Real Estate Taxation services.',
    },
    {
      slug: 'land-real-estate-services',
      heading: 'Land Real Estate Services',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
      description: 'Discover the perfect land for your vision with our specialized Land Real Estate Services.',
    },
  ]

  return (
    <div>
      <ScrollAnimations />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-slide active" style={{ '--hero-image': "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop')" } as React.CSSProperties} />
        <div className="hero-slide" style={{ '--hero-image': "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop')" } as React.CSSProperties} />
        <div className="hero-slide" style={{ '--hero-image': "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop')" } as React.CSSProperties} />
        <div className="hero-slide" style={{ '--hero-image': "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop')" } as React.CSSProperties} />
        <div className="hero-inner relative z-10 w-full">
          <h1>
            PROSPERTY REAL ESTATE
          </h1>
          <h2>
            "Real Estate Advisors, Consultants & Portfolio Managers"
          </h2>
          <p className="tagline">
            15+ Years of Trusted Expertise in Chennai
          </p>
          <div className="hero-actions">
            <Link
              href="#portfolio"
              className="btn btn-solid"
            >
              View our Projects
            </Link>
            <Link
              href="/contact/"
              className="btn btn-ghost"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 md:py-32 bg-white" id="about">
        <div className="about-container max-w-7xl mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="about-content scroll-animate">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#b8964a]">
              About Us
            </p>
            <h2 className="font-serif font-bold text-[clamp(1.5rem,3vw,2.4rem)] text-[#1a1a1a] leading-tight mb-6">
              WELCOME TO PROSPERTY ADVISORS
            </h2>
            <p className="font-sans text-sm font-normal leading-relaxed text-gray-600 mb-4">
              <strong>Real Estate Advisors, Consultants & Portfolio Managers</strong>
            </p>
            <p className="font-sans text-sm font-normal leading-relaxed text-gray-600 mb-4">
              Welcome to Prosperty Real Estate Consultant in Chennai, your trusted partner in navigating the dynamic and ever-evolving world of real estate. Prosperty stands at the nexus of innovation, expertise, and unwavering dedication, reshaping the landscape of real estate in Chennai. With a rich tapestry of trust weaved over fifteen transformative years, we remain an emblem of excellence in the bustling property market of Chennai.
            </p>
            <p className="font-sans text-sm font-normal leading-relaxed text-gray-600 mb-4">
              Explore a suite of tailored services, crafted to mirror the unique aspirations of both individuals and businesses. Beyond traditional real estate advisories, Prosperty offers bespoke research solutions, ensuring a seamless journey for all property buying and selling ventures.
            </p>
            <p className="font-sans text-sm font-normal leading-relaxed text-gray-600">
              Our Real Estate Consultants in Chennai take the time to understand your goals, preferences, and budget to provide you with tailored solutions that meet your specific needs. With expertise spanning Residential, Commercial, and Industrial segments, we commit to delivering a comprehensive and memorable experience for every client.
            </p>
          </div>

          <div className="about-image overflow-hidden rounded-xl scroll-animate">
            <img
              className="w-full h-auto object-cover"
              src="/indexassets/3d-rendering-isometric-fdgdf%201%20(1).png"
              alt="3D Rendering - Prosperty Projects"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-16 bg-gray-50 relative w-full">
        <div className="w-full relative z-10 px-7">
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-12 fade-in w-full leading-snug scroll-animate" style={{ color: '#053384', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, letterSpacing: '-0.5px' }}>
            Prosperty Real Estate Consultant in Chennai:<br />Your Trust, Our Commitment
          </h2>

          {/* Stack Cards */}
          <div className="stack-cards w-full">
            {[
              {
                title: 'Our Expertise in Chennai Real Estate',
                label: 'Our Expertise',
                image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
                description: 'Prosperty Real Estate Consultants in Chennai boasts a team of highly experienced and knowledgeable Real Estate agents in Chennai. Our experts have an in-depth understanding of the local market trends and an extensive network that spans across the city. Whether you\'re a first-time homebuyer, a seasoned investor, or a property seller, our team is well-equipped to guide you through every step of your real estate journey.',
              },
              {
                title: 'Your Trust, Our Commitment',
                label: 'Our Commitment',
                image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85',
                description: 'At Prosperty, trust is the cornerstone of our business. We understand that buying or selling a property can be a life-changing decision, and we are committed to earning your trust through transparent and ethical practices. Our Real Estate Consultants in Chennai take the time to understand your goals, preferences, and budget to provide you with tailored solutions that meet your specific needs.',
              },
              {
                title: 'Get Started with Prosperty',
                label: 'Get Started',
                image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
                description: 'Ready to embark on your real estate journey in Chennai? Partner with Prosperty Real Estate Consultants, and let us turn your property dreams into reality. Contact us today to speak with one of our Real Estate Consultants in Chennai and experience the Prosperty difference. Your trust is our commitment, and we look forward to exceeding your expectations in every way.',
              },
            ].map((card, idx) => (
              <article
                key={idx}
                className="stack-card scroll-animate h-96 md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                style={{ '--i': idx } as any}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 text-white">
                  <div className="text-xl font-semibold mb-2" style={{ color: '#ff8528' }}>
                    {card.label}
                  </div>
                  <h3 className="text-lg md:text-lg font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white text-opacity-90 text-base leading-relaxed">{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Services Heading */}
          <div className="mt-16 pt-12 mb-12 text-center">
            <h2 className="text-lg md:text-lg font-bold mb-3 fade-in">
              PROSPERTY <span className="gold-text" style={{ color: '#ff8528' }}>- Our Services</span>
            </h2>
            <h3 className="text-xl md:text-lg font-semibold text-gray-800 mb-3">Comprehensive real estate services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prosperty Real Estate Advisors is a real estate advisory and consultancy firm located in Chennai offering research based real estate consulting services.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="mt-8">
            <div className="services-carousel-container relative">
              <div className="services-carousel overflow-x-auto pb-4 scroll-smooth flex gap-6">
                {services.map((service) => (
                  <div
                    key={service.slug}
                    className="services-carousel-item scroll-animate flex-shrink-0 w-full md:w-80 rounded-3xl overflow-hidden smooth-shadow-lg card-hover flex flex-col bg-white"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.heading}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.heading}</h4>
                      <p className="text-gray-600 text-base mb-6 flex-grow leading-relaxed">{service.description}</p>
                      <Link
                        href={`/${service.slug}/`}
                        className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: '#ff8528' }}
                      >
                        <span>Reach Us</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="cs-section w-full" style={{ background: 'linear-gradient(135deg,rgba(255,133,40,.07) 0%,transparent 38%), linear-gradient(135deg,rgba(5,51,132,.06) 100%),#fbfaf7' }}>
        <div className="w-full px-7">
          <div className="cs-head mb-16">
            <h2 className="cs-title font-serif font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight text-[#053384] text-center">
              Comprehensive Real Estate Services by Prosperty
            </h2>
            <div className="cs-divider flex items-center justify-center gap-3 mt-6" aria-hidden="true">
              <span className="w-12 h-0.5" style={{ background: '#b8964a' }}></span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#b8964a">
                <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 6.9L12 17.3 5.8 21l1.6-6.9L2 9.3l7.1-.7z" />
              </svg>
              <span className="w-12 h-0.5" style={{ background: '#b8964a' }}></span>
            </div>
          </div>

          <div className="cs-grid grid gap-16 md:grid-cols-[1fr_1fr_1fr]">
            {/* Left Column */}
            <div className="cs-col flex flex-col gap-12">
              {[
                { num: '01', title: 'Real Estate Advisory', desc: 'Our team at Prosperty guides you through every step of your real estate journey, ensuring you make the right property decisions.' },
                { num: '03', title: 'Rental Assistance', desc: 'We match your property with the right tenant or find you the perfect property to rent.' },
                { num: '05', title: 'Property Research', desc: 'Prosperty Real Estate Consultants dive deep into market analytics, offering insights that pave the way for informed decisions.' },
              ].map((item) => (
                <div key={item.num} className="cs-item scroll-animate">
                  <div className="cs-item-head flex items-center gap-4 mb-3">
                    <span className="cs-num font-serif text-4xl font-light" style={{ color: 'rgba(255,133,40,.4)' }}>
                      {item.num}
                    </span>
                    <h3 className="font-serif font-semibold text-lg text-[#053384]">{item.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Center - Image */}
            <div className="cs-media hidden md:flex flex-col items-center justify-center">
              <div className="cs-frame relative overflow-hidden rounded-3xl shadow-lg" style={{ aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop"
                  alt="Elegant modern home"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="cs-badge absolute flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg" style={{ marginTop: '80px' }}>
                <strong className="font-serif text-3xl" style={{ color: '#ff8528' }}>15+</strong>
                <span className="text-sm font-semibold text-[#053384]">
                  Years of trusted<br />expertise in Chennai
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="cs-col flex flex-col gap-12">
              {[
                { num: '02', title: 'Property Purchase and Sales Support', desc: 'From identifying potential properties to managing the intricate sales process, our experts take the hassle out of transactions.' },
                { num: '04', title: 'Legal and Financial Advisory', desc: 'Navigate the complexities of real estate legalities and financial aspects with our specialized consultants.' },
                { num: '06', title: 'Property Tax Advisory', desc: 'Simplify your property tax obligations with our expert guidance and support.' },
              ].map((item) => (
                <div key={item.num} className="cs-item scroll-animate">
                  <div className="cs-item-head flex items-center gap-4 mb-3 flex-row-reverse">
                    <span className="cs-num font-serif text-4xl font-light" style={{ color: 'rgba(255,133,40,.4)' }}>
                      {item.num}
                    </span>
                    <h3 className="font-serif font-semibold text-lg text-[#053384]">{item.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories Section */}
      <section className="latest-stories w-full" style={{ background: '#f6f8fc' }}>
        <div className="w-full px-7 py-16">
          <div className="ls-head flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <span className="ls-eyebrow inline-flex items-center gap-2 mb-4 font-semibold text-sm" style={{ color: '#ff8528' }}>
                <span className="inline-block w-7 h-0.5" style={{ background: '#ff8528' }}></span>
                Our Blog
              </span>
              <h2 className="ls-title font-serif font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight" style={{ color: '#053384' }}>
                Latest Stories
              </h2>
              <p className="ls-sub mt-3 text-sm text-gray-600 leading-relaxed">
                Insights and updates from Chennai's real estate market
              </p>
            </div>
            <Link
              href="/blog/"
              className="ls-all inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full transition-all"
              style={{ color: '#053384', borderColor: '#053384' }}
            >
              View all stories
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="ls-grid grid gap-7 lg:grid-cols-[1.35fr_1fr]">
            {/* Featured Article */}
            {posts.length > 0 && (
              <article className="ls-card ls-featured scroll-animate rounded-3xl overflow-hidden bg-white border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                  alt={posts[0].heading}
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="ls-body p-8">
                  <span className="ls-tag inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ background: '#fff3e8', color: '#e56f12' }}>
                    {posts[0].categories[0] || 'Real Estate'}
                  </span>
                  <h3 className="ls-card-title font-serif font-bold text-2xl mb-4" style={{ color: '#053384' }}>
                    {posts[0].heading}
                  </h3>
                  <p className="ls-excerpt text-base text-gray-700 leading-relaxed mb-6">
                    Insights and expertise from Prosperty advisors to guide your property decisions.
                  </p>
                  <div className="ls-meta flex items-center gap-2 text-sm text-gray-600">
                    <span>March 15, 2024</span>
                    <span className="ls-dot inline-block w-1 h-1 rounded-full" style={{ background: '#ff8528' }}></span>
                    <span>5 min read</span>
                    <Link href={`/${posts[0].slug}/`} className="ls-read ml-auto font-semibold" style={{ color: '#ff8528' }}>
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Side Articles */}
            <div className="ls-side flex flex-col gap-6">
              {posts.slice(1, 4).map((post, idx) => (
                <article key={post.slug} className="ls-card ls-mini scroll-animate flex rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop"
                    alt={post.heading}
                    className="w-40 h-40 object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="ls-body flex flex-col justify-between p-5 flex-grow">
                    <div>
                      <span className="ls-tag inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2" style={{ background: '#fff3e8', color: '#e56f12' }}>
                        {post.categories[0] || 'Real Estate'}
                      </span>
                      <h3 className="ls-card-title font-serif font-bold text-base mb-2 line-clamp-3" style={{ color: '#053384' }}>
                        {post.heading}
                      </h3>
                    </div>
                    <div className="ls-meta flex items-center gap-2 text-xs text-gray-600">
                      <span>March {12 - idx}, 2024</span>
                      <span className="ls-dot inline-block w-1 h-1 rounded-full" style={{ background: '#ff8528' }}></span>
                      <span>{4 + idx} min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-full px-7">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight mb-6" style={{ color: '#053384' }}>
              FAQ's - Prosperty <span style={{ color: '#ff8528' }}>Real Estate Chennai</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed">
              Find answers to common questions about our real estate services and consultancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Why should I choose Prosperty for my real estate needs?',
                a: 'Prosperty brings 15+ years of trusted expertise in Chennai\'s real estate market. We combine research-based insights with personalized service, offering comprehensive advisory across Residential, Commercial, and Industrial segments. Our track record speaks for itself with numerous satisfied clients and successful transactions.',
              },
              {
                q: 'Do you provide NRI real estate services?',
                a: 'Yes, Prosperty offers specialized NRI real estate services. Our team understands the unique challenges faced by NRIs and provides comprehensive support for property buying, selling, and investment in Chennai.',
              },
              {
                q: 'What does real estate investment advisory involve?',
                a: 'Our investment advisory encompasses market analysis, property selection, valuation, and guidance on investment potential. We help you identify lucrative opportunities and make informed decisions based on your financial goals.',
              },
              {
                q: 'How is property valuation conducted at Prosperty?',
                a: 'We conduct comprehensive property valuations using market analysis, comparable sales, property condition assessment, and location factors. Our valuations are based on current market trends and provide accurate market estimates.',
              },
            ].map((item, idx) => (
              <details key={idx} className="faq-item scroll-animate bg-white rounded-2xl border-2 border-gray-100 overflow-hidden group">
                <summary className="faq-header w-full px-8 py-6 flex items-start justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-base text-gray-900 text-left">{item.q}</h3>
                  <span className="faq-icon text-lg flex-shrink-0 ml-4 transition-transform group-open:rotate-45" style={{ color: '#b8964a' }}>+</span>
                </summary>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 group-open:max-h-96">
                  <p className="px-8 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
