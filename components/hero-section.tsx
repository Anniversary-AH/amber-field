'use client'

import { useEffect, useRef } from 'react'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-start bg-white animate-fade-in"
    >
      <div className="container-max section-padding">
        <div className="max-w-4xl">
          <h1 className="heading-xl mb-8 text-black">
            Amber-Field
          </h1>
          <p className="text-body text-gray-700 mb-12 max-w-2xl neuton-regular">
            Crafting simple tools for real humans. No fluff, no hype — just thoughtful builds that do what they're meant to.
          </p>
          <button
            onClick={handleViewProjects}
            className="btn-primary"
            aria-label="View our projects portfolio"
          >
            View Projects
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
