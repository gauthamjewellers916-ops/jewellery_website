"use client"

import { useState } from "react"
import { CollectionGrid } from "./collection-grid"
import { CollectionFilters } from "./collection-filters"

export function CollectionContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CollectionFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <CollectionGrid activeCategory={activeCategory} />
      </div>
    </section>
  )
}
