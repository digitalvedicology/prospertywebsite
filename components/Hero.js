'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
          style={{ '--hero-image': `url('${slide}')` }}
        ></div>
      ))}

      <div className="hero-inner">
        <h1>PROSPERTY REAL ESTATE</h1>
        <h2>"Real Estate Advisors, Consultants & Portfolio Managers"</h2>
        <p className="tagline">15+ Years of Trusted Expertise in Chennai</p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-solid">
            View our Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
