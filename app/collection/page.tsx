import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CollectionContent } from "@/components/collection/collection-content"

export const metadata = {
  title: "Collection | Gautham Jewellers",
  description: "Explore our exquisite collection of handcrafted ornaments.",
}

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border bg-muted/20 text-center px-6 animate-fade-in">
        <p className="text-secondary text-sm font-medium tracking-[0.2em] uppercase mb-6">The Archive</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-primary font-normal mb-8 leading-[1.1]">
          Masterpieces
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Discover timeless pieces crafted with unparalleled passion and precision. 
          Each creation tells a unique story of heritage, reimagined for the modern era.
        </p>
      </section>

      <CollectionContent />

      <Footer />
    </main>
  )
}
