'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
        : 'bg-black/95 backdrop-blur-sm md:bg-black/95'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className={`text-2xl font-bold tracking-wider cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white md:text-white'
            }`}
            onClick={() => handleNavClick('hero')}
            tabIndex={0}
            aria-label="Amber-Field logo - click to go to top"
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')}
          >
            AMBER-FIELD
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              aria-label="Navigate to About section"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              aria-label="Navigate to Projects section"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('approach')}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              aria-label="Navigate to Approach section"
            >
              Approach
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              aria-label="Navigate to Contact section"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled 
                ? 'text-black hover:text-gray-600' 
                : 'text-black hover:text-gray-600'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
