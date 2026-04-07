import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCollection } from "@/components/home/featured-collection"
import { CraftsmanshipSection } from "@/components/home/craftsmanship-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FloatingContact } from "@/components/ui/floating-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedCollection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
