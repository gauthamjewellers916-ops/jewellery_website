"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The bridal set I purchased for my daughter's wedding was absolutely stunning. The craftsmanship and attention to detail exceeded all expectations.",
  },
  {
    name: "Anjali Mehta",
    location: "Delhi",
    text: "I've been a loyal customer for over 15 years. The quality and designs are consistently exceptional. Their kundan collection is truly one of a kind.",
  },
  {
    name: "Lakshmi Iyer",
    location: "Chennai",
    text: "The temple jewelry collection is authentic and beautiful. The team was incredibly helpful in customizing pieces for our family temple ceremony.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <p className="text-secondary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Testimonials
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl text-primary font-normal mb-16">
          What Our Customers Say
        </h2>
        
        <div className="bg-muted/50 p-10 md:p-20 relative rounded-sm">
          <div className="text-secondary mb-8">
            <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed mb-10 transition-opacity duration-500">
            "{testimonials[current].text}"
          </p>
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-1">{testimonials[current].name}</p>
          <p className="text-foreground/50 text-xs tracking-wider uppercase">{testimonials[current].location}</p>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-[-2rem] pointer-events-none">
            <button 
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border pointer-events-auto hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border pointer-events-auto hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
