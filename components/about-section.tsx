'use client'

import { useEffect, useRef } from 'react'

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (leftColumnRef.current) {
      observer.observe(leftColumnRef.current)
    }
    if (rightColumnRef.current) {
      observer.observe(rightColumnRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="section-padding bg-gray-50"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading */}
          <div ref={leftColumnRef} className="animate-slide-left">
            <h2 className="heading-lg mb-8 text-black">
              About Amber-Field
            </h2>
          </div>

          {/* Right Column - Content */}
          <div ref={rightColumnRef} className="space-y-6 animate-slide-right">
            <p className="text-body text-gray-700 neuton-regular">
              I'm a solo developer on the east coast of Australia, transitioning from engineering into AI and automation. After years in mining, I'm focused on building small, practical tools and digital services — things that solve real problems without the fluff.
            </p>
            <p className="text-body text-gray-700 neuton-regular">
              Amber Field is my personal launchpad: part lab, part portfolio. It’s where I learn by building, ship what works, and stay grounded in curiosity, creativity, and home life.
            </p>
            <p className="text-body text-gray-700 neuton-regular">
              No big team. No VC. Just one curious, ADHD-fuelled builder committed to making thoughtful tools that are simple, useful, and quietly good.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
