"use client"

const categories = ["All", "Necklaces", "Earrings", "Bangles", "Rings", "Bridal Sets"]

interface CollectionFiltersProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function CollectionFilters({ activeCategory, setActiveCategory }: CollectionFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full border text-sm font-medium tracking-wide transition-all duration-300 ${
            activeCategory === category
              ? "bg-primary text-white border-primary shadow-sm"
              : "bg-white text-foreground/80 border-border hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
