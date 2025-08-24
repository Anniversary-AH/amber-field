'use client'

import { useEffect, useRef } from 'react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tip Calculator",
    description: "A modern, user-friendly tip calculator with real-time calculations, percentage options, and split bill functionality. Built with React and deployed on Vercel.",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1564986410613-97e0b371efe5?w=1181&auto=format&fit=crop&q=80",
    link: "https://tip-calculator.amber-field.com/"
  },
  {
    id: 2,
    title: "Nutrition Tracker",
    description: "A simple, responsive nutrition tool for converting kilojoules to kilocalories and tracking daily intake with quick-add buttons and target progress. Built with React and deployed on Vercel",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1606882800976-ec40cfbb114d?auto=format&fit=crop&w=800&q=80",
    link: "https://nutrition-calc.amber-field.com/"
  },
  {
    id: 3,
    title: "Solitaire Game",
    description: "Coming soon",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Crypto Price Tracker",
    description: "Coming soon",
    category: "Web Application and API",
    imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "TBA",
    description: "Coming soon",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "TBA",
    description: "Coming soon",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      ref={cardRef}
      className={`group cursor-pointer animate-scale-in animate-stagger-${index + 1} ${
        project.link ? 'hover:scale-105' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden bg-gray-200 aspect-[4/3] mb-6">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {project.link && (
          <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Live
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          {project.category}
        </p>
        <h3 className="heading-md text-black group-hover:text-gray-700 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed neuton-regular">
          {project.description}
        </p>
        {project.link && (
          <p className="text-sm text-amber-600 font-medium">
            Click to view live project →
          </p>
        )}
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
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
      id="projects" 
      ref={projectsRef}
      className="section-padding bg-white"
    >
      <div className="container-max">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-6 text-black">
            Current Projects
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto neuton-regular">
            Projects I've built while learning, tinkering, or chasing curiosity. Some are polished, some are scrappy — all made with care.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
