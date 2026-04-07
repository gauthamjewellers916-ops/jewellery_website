"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full flex items-end justify-center pb-24 md:pb-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-jewelry.png"
          alt="Exquisite luxury jewelry"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Simple, standard dark gradient strictly for white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <p className="text-secondary text-xs sm:text-sm font-medium tracking-[0.4em] uppercase mb-4 md:mb-6">
          The Pinnacle of Heritage
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-white font-normal leading-[1.05] tracking-tight mb-8">
          Timeless Elegance
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover pieces that define modern luxury. Handcrafted with uncompromising precision.
        </p>

        <Link
          href="/collection"
          className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
        >
          Explore Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
