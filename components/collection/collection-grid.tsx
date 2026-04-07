"use client"

import Image from "next/image"

const products = [
  { id: 1, name: "Royal Kundan Bridal Set", category: "Bridal Sets", image: "/images/collection/bridal-set.png", isNew: true },
  { id: 2, name: "Heritage Kundan Necklace", category: "Necklaces", image: "/images/collection/kundan-necklace.png", isNew: false },
  { id: 3, name: "Temple Gold Necklace", category: "Necklaces", image: "/images/collection/temple-jewelry.png", isNew: false },
  { id: 4, name: "Pearl Jhumka Earrings", category: "Earrings", image: "/images/collection/jhumka-earrings.png", isNew: true },
  { id: 5, name: "Meenakari Gold Bangles", category: "Bangles", image: "/images/collection/gold-bangles.png", isNew: false },
  { id: 6, name: "Antique Ruby Ring", category: "Rings", image: "/images/collection/antique-ring.png", isNew: false },
]

interface CollectionGridProps {
  activeCategory: string
}

export function CollectionGrid({ activeCategory }: CollectionGridProps) {
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
      {filteredProducts.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <div className="relative aspect-[4/5] bg-muted mb-6 overflow-hidden border border-border">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium z-10 shadow-sm">
                New Arrival
              </span>
            )}
          </div>
          <div className="text-center group-hover:translate-y-[-4px] transition-transform duration-300">
            <p className="text-secondary text-xs tracking-[0.2em] uppercase mb-2 font-medium">{product.category}</p>
            <h3 className="font-serif text-2xl text-primary font-normal">{product.name}</h3>
          </div>
        </div>
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-24 text-foreground/50">
          No pieces found in this category.
        </div>
      )}
    </div>
  )
}
