"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp, MessageCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { LogoGJ } from "@/components/ui/logo-gj"

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919876543210" },
  ]

  return (
    <footer ref={ref} className="bg-background border-t border-primary/20 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 border border-gold/5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 border border-gold/5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>

      {/* Scroll to top button */}
      <MagneticButton strength={0.3} className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="relative w-12 h-12 bg-gold text-navy flex items-center justify-center rounded-full overflow-hidden group"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="absolute inset-0 bg-cream"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </MagneticButton>

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-3 group">
              <LogoGJ className="w-10 h-10" />
              <motion.h3 
                className="font-serif text-2xl font-semibold text-primary"
                whileHover={{ scale: 1.02 }}
              >
                Gautham Jewellers
              </motion.h3>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Crafting timeless elegance and trust. Each piece tells a story of heritage, 
              artistry, and the enduring beauty of handcrafted 916KDM & 22CT gold ornaments.
            </p>
            
            {/* Social Links with hover effects */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <MagneticButton key={social.name} strength={0.4}>
                  <motion.a 
                    href={social.href}
                    target={social.name === "WhatsApp" ? "_blank" : undefined}
                    rel={social.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="relative w-10 h-10 border border-gold/30 flex items-center justify-center group overflow-hidden"
                    aria-label={social.name}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gold"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredSocial === social.name ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <social.icon className={`w-4 h-4 relative z-10 transition-colors duration-300 ${
                      hoveredSocial === social.name ? "text-background" : "text-foreground/60"
                    }`} />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-cream font-medium tracking-wider uppercase text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About Us", "Collection", "Contact"].map((item, index) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                  className="group text-foreground/60 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 w-fit"
                >
                  <motion.span 
                    className="w-0 h-px bg-gold"
                    whileHover={{ width: 16 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative">
                    {item}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-gold origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Collections */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-cream font-medium tracking-wider uppercase text-sm">Collections</h4>
            <nav className="flex flex-col gap-3">
              {["Bridal Sets", "Kundan", "Temple Jewelry", "Contemporary", "Antique"].map((item) => (
                <Link
                  key={item}
                  href="/collection"
                  className="group text-foreground/60 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 w-fit"
                >
                  <motion.span 
                    className="w-0 h-px bg-gold"
                    whileHover={{ width: 16 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative">
                    {item}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-gold origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-cream font-medium tracking-wider uppercase text-sm">Contact Us</h4>
            <div className="flex flex-col gap-4">
              {/* Phone - Abhasu Shankar Metkari */}
              <MagneticButton strength={0.2}>
                <a 
                  href="tel:08025465873" 
                  className="group flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <motion.div 
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gold"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Phone className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors" />
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="text-foreground/40 text-[10px] uppercase tracking-wider">A/C Show Room</p>
                    <p className="group-hover:text-primary transition-colors">080-25465873</p>
                  </div>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a 
                  href="tel:+919900954791" 
                  className="group flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <motion.div 
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gold"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Phone className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors" />
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="text-foreground/40 text-[10px] uppercase tracking-wider">Mobile 1</p>
                    <p className="group-hover:text-primary transition-colors">+91 99009 54791</p>
                  </div>
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <a 
                  href="tel:+919449119542" 
                  className="group flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <motion.div 
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gold"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Phone className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors" />
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="text-foreground/40 text-[10px] uppercase tracking-wider">Mobile 2</p>
                    <p className="group-hover:text-primary transition-colors">+91 94491 19542</p>
                  </div>
                </a>
              </MagneticButton>
              
              {/* WhatsApp */}
              <MagneticButton strength={0.2}>
                <a 
                  href="https://wa.me/919900954791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-cream/60 hover:text-emerald-400 transition-colors text-sm"
                >
                  <motion.div 
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-emerald-500"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <MessageCircle className="w-4 h-4 relative z-10 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-cream/40 text-xs">WhatsApp</p>
                    <p className="group-hover:text-emerald-400 transition-colors">Chat with us</p>
                  </div>
                </a>
              </MagneticButton>

              {/* Email */}
              <MagneticButton strength={0.2}>
                <a 
                  href="mailto:contact@mayakkajewellers.com" 
                  className="group flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <motion.div 
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gold"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Mail className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-foreground/40 text-xs">Email</p>
                    <p className="group-hover:text-primary transition-colors">info@gauthamjewellers.com</p>
                  </div>
                </a>
              </MagneticButton>

              {/* Address */}
              <div className="flex items-start gap-3 text-cream/60 text-sm">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-foreground/40 text-xs">Visit us</p>
                  <p className="pt-0.5"># 27/134, Tannery Road, Near Periyarnagar Circle, Bangalore - 560 005.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-foreground/40 text-sm">
            2025 Gautham Jewellers. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-cream/40 hover:text-gold transition-colors text-sm relative group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-0.5 left-0 h-px bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
