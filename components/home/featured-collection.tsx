"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  { name: "Bridal Sets", description: "Legendary centerpieces.", image: "/images/collection/bridal-set.png" },
  { name: "Jhumka Earrings", description: "Traditional designs.", image: "/images/collection/jhumka-earrings.png" },
  { name: "Gold Bangles", description: "22k golden heritage.", image: "/images/collection/gold-bangles.png" },
]

export function FeaturedCollection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-8 border-b border-border pb-8 animate-fade-in">
          <div>
            <p className="text-secondary text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Curated Exclusives
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-primary font-normal">
              Featured Collections
            </h2>
          </div>
          <Link
            href="/collection"
            className="group flex items-center gap-3 text-secondary font-medium tracking-wider uppercase text-sm hover:text-primary transition-colors"
          >
            View All Pieces
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          {categories.map((category) => (
            <Link key={category.name} href="/collection" className="group block">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-primary font-medium mb-2">{category.name}</h3>
              <p className="text-foreground/60 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
