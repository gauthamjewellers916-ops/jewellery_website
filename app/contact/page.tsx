"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useEffect, useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["080-25465873", "+91 99009 54791", "+91 94491 19542"],
    href: "tel:08025465873",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@gauthamjewellers.com"],
    href: "mailto:info@gauthamjewellers.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["# 27/134, Tannery Road", "Near Periyarnagar Circle, Bangalore 560005"],
    href: "#map",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment"],
    href: null,
  },
]

export default function ContactPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 border border-gold rotate-45" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-gold rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p 
            className={`text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4 transition-all duration-1000 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Get In Touch
          </p>
          <h1 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-semibold mb-6 text-balance transition-all duration-1000 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Contact Us
          </h1>
          <p 
            className={`text-cream/70 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            We would love to hear from you. Visit our showroom or reach out 
            to us for any inquiries about our collections.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <AnimatedSection variant="fadeRight">
                <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-6">
                  Send Us a Message
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeRight" delay={100}>
                <p className="text-navy/70 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </AnimatedSection>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <AnimatedSection variant="fadeLeft">
                <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-6">
                  Contact Information
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeLeft" delay={100}>
                <p className="text-navy/70 mb-8">
                  Reach out to us through any of the following channels or visit our showroom.
                </p>
              </AnimatedSection>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <AnimatedSection key={item.title} variant="fadeLeft" delay={150 + index * 100}>
                    <div className="flex gap-4 group cursor-default">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:scale-110 group-hover:rotate-12">
                          <item.icon className="w-5 h-5 text-gold transition-colors duration-500 group-hover:text-navy" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-navy mb-1 transition-colors duration-300 group-hover:text-gold">{item.title}</h3>
                        {item.details.map((detail) => (
                          item.href ? (
                            <a
                              key={detail}
                              href={item.href}
                              className="block text-navy/70 hover:text-gold transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={detail} className="text-navy/70">
                              {detail}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Social Links */}
              <AnimatedSection variant="fadeLeft" delay={550}>
                <div className="mt-12 pt-8 border-t border-gold/20">
                  <h3 className="font-medium text-navy mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="group w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                    <a
                      href="#"
                      className="group w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="bg-navy-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-cream font-semibold mb-4">
                Visit Our Showroom
              </h2>
              <p className="text-cream/70">
                Experience our collections in person at our flagship store in Bangalore.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="scale" delay={200}>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-muted overflow-hidden relative group">
              <iframe
                src="https://maps.google.com/maps?q=27/134,%20Tannery%20Road,%20Near%20Periyarnagar%20Circle,%20Bangalore%20560005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gautham Jewellers Location"
                className="transition-all duration-500 group-hover:scale-105"
              />
              {/* Decorative border */}
              <div className="absolute inset-4 border border-gold/20 pointer-events-none transition-all duration-500 group-hover:inset-2" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
