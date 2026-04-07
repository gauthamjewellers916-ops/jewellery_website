"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { LogoGJ } from "@/components/ui/logo-gj"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Collection", href: "/collection" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    closed: { 
      x: -50, 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        onMouseMove={handleMouseMove}
      >
        {/* Cursor follower for nav */}
        {hoveredLink && (
          <motion.div
            className="absolute w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none hidden md:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%"
            }}
          />
        )}

        <nav className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <MagneticButton strength={0.15}>
              <Link href="/" className="group flex items-center gap-3 relative">
                <motion.div
                  className="absolute -inset-4 bg-gold/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="logo-bg"
                />
                <LogoGJ className="w-10 h-10 relative z-10" />
                <motion.span 
                  className="font-serif text-2xl md:text-3xl font-semibold text-primary tracking-wide relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Gautham Jewellers
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </MagneticButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <MagneticButton key={link.name} strength={0.1}>
                  <Link
                    href={link.href}
                    className="relative px-5 py-2 text-sm font-medium tracking-widest uppercase group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.span 
                      className={`relative z-10 transition-colors duration-300 ${
                        pathname === link.href ? "text-primary" : "text-foreground/80 group-hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Hover background */}
                    <motion.span
                      className="absolute inset-0 bg-gold/10 rounded-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredLink === link.name ? 1 : 0,
                        scale: hoveredLink === link.name ? 1 : 0.8
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Active indicator */}
                    {pathname === link.href && (
                      <motion.span
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-gold rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Underline */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-px bg-gold origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: pathname === link.href ? 1 : (hoveredLink === link.name ? 1 : 0)
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </MagneticButton>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center text-primary z-50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : 0,
                    width: isOpen ? "100%" : "100%"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current origin-left"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 0,
                    width: isOpen ? "100%" : "70%"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-navy/98 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-1/4 -left-20 w-40 h-40 border border-gold/10 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-20 w-60 h-60 border border-gold/10 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent rotate-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.1 }}
              />
            </div>

            {/* Menu Content */}
            <motion.nav
              className="relative h-full flex flex-col justify-center px-8 pt-20"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block py-4"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-gold/40 font-mono text-sm">
                        0{index + 1}
                      </span>
                      <motion.span 
                        className={`font-serif text-4xl sm:text-5xl font-semibold tracking-wide ${
                          pathname === link.href ? "text-gold" : "text-cream"
                        }`}
                        whileHover={{ x: 20, color: "#D4AF37" }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {link.name}
                      </motion.span>
                      {pathname === link.href && (
                        <motion.span
                          layoutId="mobileActive"
                          className="ml-auto"
                        >
                          <Sparkles className="w-5 h-5 text-gold" />
                        </motion.span>
                      )}
                    </div>
                    <motion.div 
                      className="h-px bg-gold/20 mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.1 * index }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Footer in mobile menu */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                variants={itemVariants}
              >
                <p className="text-cream/40 text-sm mb-2">Get in touch</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:+919900954791" 
                    className="text-gold font-serif text-xl hover:text-gold-light transition-colors"
                  >
                    +91 99009 54791
                  </a>
                  <a 
                    href="tel:+919449119542" 
                    className="text-gold font-serif text-xl hover:text-gold-light transition-colors"
                  >
                    +91 94491 19542
                  </a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
