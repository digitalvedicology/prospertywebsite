'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    alt: 'Residential real estate',
    title: 'Residential Real Estate Services',
    description: 'Discover your ideal home in Chennai with our premier Residential Real Estate Services.',
  },
  {
    image: 'https://i.pinimg.com/736x/75/b4/bc/75b4bc924b8e4eafd068de073667380a.jpg',
    alt: 'Commercial real estate',
    title: 'Commercial Real Estate Services',
    description: 'Exceptional opportunities for your business with our premier Commercial Real Estate Services.',
  },
  {
    image: 'https://i.pinimg.com/1200x/8e/6f/d4/8e6fd464e4e82475f2126818dd9598c3.jpg',
    alt: 'Investment advisory',
    title: 'Real Estate Investment Advisory',
    description: 'Maximize your real estate investments with our expert Real Estate Investment Advisory Services.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop',
    alt: 'Valuation & advisory',
    title: 'Real Estate Valuation & Advisory',
    description: 'Our Real Estate Valuation & Advisory services offer precise property valuation and market analysis.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
    alt: 'Legal & documentation',
    title: 'Real Estate Legal & Documentation',
    description: 'Ensure a smooth real estate transaction with our expert legal and documentation services.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
    alt: 'NRI services',
    title: 'NRI Real Estate Services',
    description: 'Explore hassle-free property transactions in India with our dedicated NRI Real Estate Services.',
  },
  {
    image: 'https://i.pinimg.com/736x/06/41/31/0641318031d3bc8bf0bc3f25e699d9a3.jpg',
    alt: 'Research services',
    title: 'Real Estate Research Services',
    description: 'Stay ahead in the real estate market with our cutting-edge Real Estate Research Services.',
  },
  {
    image: 'https://i.pinimg.com/736x/75/b4/bc/75b4bc924b8e4eafd068de073667380a.jpg',
    alt: 'Real estate taxation',
    title: 'Real Estate Taxation',
    description: 'Optimize your real estate investments with our expert Real Estate Taxation services.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
    alt: 'Land services',
    title: 'Land Real Estate Services',
    description: 'Discover the perfect land for your vision with our specialized Land Real Estate Services.',
  },
]

function moveCarousel(carousel, direction) {
  if (!carousel) return
  const card = carousel.querySelector('.services-carousel-item')
  const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0
  const step = card ? card.offsetWidth + gap : carousel.clientWidth * 0.8
  const maxScroll = carousel.scrollWidth - carousel.clientWidth

  if (direction > 0 && carousel.scrollLeft >= maxScroll - 4) {
    carousel.scrollTo({ left: 0, behavior: 'smooth' })
  } else if (direction < 0 && carousel.scrollLeft <= 4) {
    carousel.scrollTo({ left: maxScroll, behavior: 'smooth' })
  } else {
    carousel.scrollBy({ left: direction * step, behavior: 'smooth' })
  }
}

export default function Services() {
  const wrapRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    let timer

    const start = () => {
      clearInterval(timer)
      timer = setInterval(() => moveCarousel(carouselRef.current, 1), 4000)
    }
    const stop = () => clearInterval(timer)

    wrap.addEventListener('mouseenter', stop)
    wrap.addEventListener('mouseleave', start)
    start()

    return () => {
      stop()
      wrap.removeEventListener('mouseenter', stop)
      wrap.removeEventListener('mouseleave', start)
    }
  }, [])

  return (
    <>
      <div className="mt-16 pt-12 mb-12 text-center">
        <h2 className="text-lg md:text-lg font-bold mb-3 fade-in">
          PROSPERTY <span className="gold-text">- Our Services</span>
        </h2>
        <h3 className="text-xl md:text-lg font-semibold text-gray-800 mb-3">Comprehensive real estate services</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Prosperty Real Estate Advisors is a real estate advisory and consultancy firm located in Chennai offering
          research based real estate consulting services.
        </p>
      </div>

      <div className="mt-8">
        <div id="services" className="services-carousel-container relative" ref={wrapRef}>
          <div className="services-carousel overflow-x-auto pb-4 scroll-smooth" ref={carouselRef}>
            {services.map((service) => (
              <div
                key={service.title}
                className="services-carousel-item flex-shrink-0 w-full md:w-80 bg-white rounded-3xl overflow-hidden smooth-shadow-lg card-hover flex flex-col"
              >
                <div className="relative h-48 overflow-hidden img-hover">
                  <img src={service.image} alt={service.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 text-xl mb-6 line-clamp-2 flex-grow">{service.description}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: '#ff8528' }}
                  >
                    <span>Reach Us</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-prev svc-arrow svc-arrow-prev"
            aria-label="Previous services"
            onClick={() => moveCarousel(carouselRef.current, -1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-next svc-arrow svc-arrow-next"
            aria-label="Next services"
            onClick={() => moveCarousel(carouselRef.current, 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
