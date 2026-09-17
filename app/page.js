'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import ComprehensiveServices from '@/components/ComprehensiveServices'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-item[href^="#"]')
    const sections = document.querySelectorAll('section[id], header[id], footer[id]')

    function updateActiveNav() {
      let current = ''

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute('id')
        }
      })

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current)
      })
    }

    window.addEventListener('scroll', updateActiveNav)
    updateActiveNav()

    return () => {
      window.removeEventListener('scroll', updateActiveNav)
    }
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ComprehensiveServices />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  )
}
