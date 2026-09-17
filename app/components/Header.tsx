'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigationConfig } from '@/app/config/navigation'
import { NavigationItem } from '@/app/lib/types'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderNavItems = (items: NavigationItem[]) => {
    return items.map((item) => (
      <div key={item.href} className="nav-item relative group">
        <Link
          href={item.href}
          className="flex items-center gap-2 hover:text-gold transition-colors"
        >
          {item.label}
          {item.children && <span className="dropdown-arrow">▼</span>}
        </Link>

        {item.children && (
          <div className="dropdown-menu absolute top-full left-0 min-w-[280px] bg-white border border-gray-200 border-t-4 border-t-gold rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-1000 mt-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-3 text-gray-700 text-sm font-normal hover:bg-gray-50 hover:text-gold transition-all"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand flex items-center gap-3">
        <img
          src="/indexassets/logo.png"
          alt="Prosperty Real Estate Logo"
          className="brand-logo h-12 w-auto"
        />
        <div>
          <div className="brand-name text-lg font-bold text-ink">Prosperty</div>
          <div className="brand-tag text-xs uppercase tracking-wider text-gold font-semibold">
            Real Estate
          </div>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav hidden md:flex gap-8 flex-1 justify-center max-w-5xl">
        {renderNavItems(navigationConfig.main.slice(0, -1))}
      </nav>

      {/* CTA Button */}
      <Link
        href="/contact/"
        className="btn-call hidden md:inline-block ml-auto bg-gold text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
      >
        Contact
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg">
          <div className="flex flex-col max-h-96 overflow-y-auto">
            {navigationConfig.main.map((item) => (
              <div key={item.href} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="block px-4 py-3 font-semibold text-sm text-ink hover:bg-gold hover:text-white transition-colors"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="bg-gray-50 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
