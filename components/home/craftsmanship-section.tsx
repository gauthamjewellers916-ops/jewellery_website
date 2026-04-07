"use client"

import Image from "next/image"
import { Sparkles, Shield, Award, Heart } from "lucide-react"

const features = [
  { icon: Sparkles, title: "Handcrafted Excellence", description: "Every piece is meticulously crafted by our master artisans with decades of experience." },
  { icon: Shield, title: "Certified Purity", description: "All our gold jewelry comes with BIS hallmark certification guaranteeing purity." },
  { icon: Award, title: "Heritage Design", description: "Traditional designs passed down through generations, reimagined for modern elegance." },
  { icon: Heart, title: "Lifetime Service", description: "Complimentary cleaning, polishing, and repair services for all our creations." },
]

export function CraftsmanshipSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none bg-muted animate-fade-in">
            <Image
              src="/images/artisan.png"
              alt="Master artisan crafting jewelry"
              fill
              className="object-cover"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <p className="text-secondary text-sm font-medium tracking-[0.2em] uppercase mb-4">
              The Process
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-primary font-normal mb-8 leading-[1.1]">
              Craftsmanship That Speaks Generations
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-12">
              For over three decades, Gautham Jewellers has been the trusted name for
              families seeking authentic Indian jewelry. Our commitment to quality, 
              tradition, and customer satisfaction sets us apart in a world of mass production.
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-muted rounded-full">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary font-medium mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
