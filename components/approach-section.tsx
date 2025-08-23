'use client'

import { useEffect, useRef } from 'react'

interface ApproachStep {
  id: number
  title: string
  description: string
}

const approachSteps: ApproachStep[] = [
  {
    id: 1,
    title: "Curiosity first",
    description: "Every project starts with a question, an itch, or a problem that feels worth solving — even if it's small."
  },
  {
    id: 2,
    title: "Plan the essentials",
    description: "I like enough structure to move forward, but not so much that it slows me down. Clarity beats complexity."
  },
  {
    id: 3,
    title: "Build, test, ship",
    description: "I work in fast, simple loops. What's usable goes live. What isn't gets iterated. Progress over polish."
  },
  {
    id: 4,
    title: "Learn in public",
    description: "These projects are my portfolio and my classroom. I share the journey, not just the outcomes."
  }
]

const ApproachStep = ({ step, index }: { step: ApproachStep; index: number }) => {
  const stepRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (stepRef.current) {
      observer.observe(stepRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={stepRef}
      className={`flex items-start space-x-6 animate-slide-left animate-stagger-${index + 1}`}
    >
      <div className="flex-shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold font-sans">
        {step.id}
      </div>
      <div className="flex-1">
        <h3 className="heading-md text-black mb-3">
          {step.title}
        </h3>
        <p className="text-body text-gray-600 leading-relaxed neuton-regular">
          {step.description}
        </p>
      </div>
    </div>
  )
}

const ApproachSection = () => {
  const approachRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="approach" 
      ref={approachRef}
      className="section-padding bg-gray-50"
    >
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-6 text-black">
            How I Build
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto neuton-regular">
            I'm not a big team or agency — just a solo builder on the East Coast of Australia, learning by doing and shipping what I can.
          </p>
        </div>

        {/* Approach Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Steps 1 & 2 */}
          <div className="space-y-12">
            <ApproachStep step={approachSteps[0]} index={0} />
            <ApproachStep step={approachSteps[1]} index={1} />
          </div>
          
          {/* Right Column - Steps 3 & 4 */}
          <div className="space-y-12">
            <ApproachStep step={approachSteps[2]} index={2} />
            <ApproachStep step={approachSteps[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection
