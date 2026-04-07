"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

const timeline = [
  { year: "1985", title: "The Beginning", description: "Founded by Mr. Gautham Jain in Bangalore." },
  { year: "1995", title: "First Flagship", description: "Opening doors to our first luxury showroom." },
  { year: "2010", title: "National Recognition", description: "Honored with the National Award for Excellence in Heritage Design." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Clean Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border text-center px-6 animate-fade-in">
        <p className="text-secondary text-sm font-medium tracking-[0.2em] uppercase mb-6">A Legacy In Gold</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-primary font-normal mb-8 leading-[1.1]">
          Our Heritage
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional jewelry that transcends generations. A story of passion, precision, and purity.
        </p>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] w-full bg-muted">
            <Image src="/images/artisan.png" alt="Artisan crafting" fill className="object-cover" />
          </div>
          <div className="space-y-8 lg:pl-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-normal leading-[1.3]">
              Where Tradition Meets Artistry
            </h2>
            <div className="w-12 h-px bg-secondary"></div>
            <p className="text-foreground/70 leading-relaxed text-lg font-light">
              In 1985, Mr. Gautham Jain founded Gautham Jewellers with a vision to 
              preserve and celebrate India's rich jewelry-making heritage through trust and quality.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg font-light">
              What began as a small workshop with a handful of skilled artisans has grown 
              into one of the most respected jewelry houses. Through generations, 
              we have remained true to our founding principles: exceptional craftsmanship, 
              authentic designs, and genuine customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-16">Milestones</h2>
          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row gap-4 md:gap-12 items-start border-l border-secondary/30 pl-6 md:pl-12 hover:border-secondary transition-colors duration-300">
                <span className="font-serif text-3xl text-secondary min-w-[120px]">{item.year}</span>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm tracking-[0.2em] uppercase mb-4">Visit Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-primary">The Flagship Boutique</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-muted p-10 md:p-16 border border-border">
            <div>
              <p className="text-primary font-serif text-2xl mb-4 border-b border-border/50 pb-4 inline-block">Location</p>
              <p className="text-foreground/70 text-lg leading-relaxed font-light mt-4">
                # 27/134, Tannery Road<br/>
                Near Periyarnagar Circle<br/>
                Bangalore 560005
              </p>
            </div>
            <div>
              <p className="text-primary font-serif text-2xl mb-4 border-b border-border/50 pb-4 inline-block">Contact & Hours</p>
              <p className="text-foreground/70 text-lg leading-relaxed mb-2 font-light mt-4">Phone: 080-25465873</p>
              <p className="text-foreground/70 text-lg leading-relaxed font-light">Mon-Sat: 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
