'use client'

import { useEffect, useRef } from 'react'
import Services from '@/components/Services'

const stackCards = [
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Real Estate Investment Options',
    label: 'Our Expertise',
    title: 'Our Expertise in Chennai Real Estate',
    description:
      "Prosperty Real Estate Consultants in Chennai boasts a team of highly experienced and knowledgeable Real Estate agents in Chennai. Our experts have an in-depth understanding of the local market trends and an extensive network that spans across the city. Whether you're a first-time homebuyer, a seasoned investor, or a property seller, our team is well-equipped to guide you through every step of your real estate journey.",
  },
  {
    image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Investment in Real Estate',
    label: 'Our Commitment',
    title: 'Your Trust, Our Commitment',
    description:
      'At Prosperty, trust is the cornerstone of our business. We understand that buying or selling a property can be a life-changing decision, and we are committed to earning your trust through transparent and ethical practices. Our Real Estate Consultants in Chennai take the time to understand your goals, preferences, and budget to provide you with tailored solutions that meet your specific needs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    alt: 'Real Estate Investment Trust',
    label: 'Get Started',
    title: 'Get Started with Prosperty',
    description:
      'Ready to embark on your real estate journey in Chennai? Partner with Prosperty Real Estate Consultants, and let us turn your property dreams into reality. Contact us today to speak with one of our Real Estate Consultants in Chennai and experience the Prosperty difference. Your trust is our commitment, and we look forward to exceeding your expectations in every way. Your quest for a trustworthy real estate partner ends here. Dive into a seamless real estate experience with Prosperty, where every decision becomes a milestone towards your dream.',
  },
]

export default function Portfolio() {
  const stackRef = useRef(null)

  // Shrink and dim each card as the next one slides over it
  useEffect(() => {
    const cards = Array.from(stackRef.current.querySelectorAll('.stack-card'))
    if (!cards.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const next = cards[i + 1]
        if (!next) {
          card.style.transform = ''
          card.style.filter = ''
          continue
        }
        const height = card.offsetHeight
        if (!height) continue
        const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top
        const progress = Math.min(Math.max(1 - gap / height, 0), 1)
        card.style.transform = `scale(${(1 - progress * 0.08).toFixed(4)})`
        card.style.filter = `brightness(${(1 - progress * 0.4).toFixed(4)})`
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-gray-50 relative w-full">
      <div className="w-full relative z-10" style={{ padding: '0 clamp(24px,5vw,72px)' }}>
        <h2
          className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-12 fade-in w-full leading-snug"
          style={{
            color: '#053384',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          Prosperty Real Estate Consultant in Chennai:
          <br />
          Your Trust, Our Commitment
        </h2>

        <div className="stack-cards w-full" ref={stackRef}>
          {stackCards.map((card, index) => (
            <div
              key={card.label}
              className="stack-card h-96 md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer img-hover smooth-shadow-lg image-container"
              style={{ '--i': index }}
            >
              <img src={card.image} alt={card.alt} loading="lazy" className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-8 md:p-12 z-10">
                <div className="text-xl font-semibold mb-2" style={{ color: '#ff8528' }}>
                  {card.label}
                </div>
                <h3 className="text-lg md:text-lg font-bold text-white">{card.title}</h3>
                <p className="text-white text-opacity-90 text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Services />
      </div>
    </section>
  )
}
