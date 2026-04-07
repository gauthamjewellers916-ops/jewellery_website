"use client"

import React from "react"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  if (isSubmitted) {
    return (
      <AnimatedSection variant="scale">
        <div className="bg-gold/10 border border-gold/30 p-8 text-center">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle className="w-8 h-8 text-gold" />
          </div>
          <h3 className="font-serif text-xl text-navy font-semibold mb-2">
            Message Sent Successfully
          </h3>
          <p className="text-navy/70">
            Thank you for reaching out. We will get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-6 text-gold hover:text-gold-dark font-medium text-sm tracking-wider uppercase relative group"
          >
            Send Another Message
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatedSection variant="fadeUp" delay={0}>
          <div className="relative">
            <label 
              htmlFor="name" 
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                focusedField === "name" ? "text-gold" : "text-navy"
              }`}
            >
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 border border-gold/30 bg-cream text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
              placeholder="Your name"
            />
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
              focusedField === "name" ? "w-full" : "w-0"
            }`} />
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeUp" delay={50}>
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                focusedField === "email" ? "text-gold" : "text-navy"
              }`}
            >
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 border border-gold/30 bg-cream text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
              placeholder="your@email.com"
            />
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
              focusedField === "email" ? "w-full" : "w-0"
            }`} />
          </div>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatedSection variant="fadeUp" delay={100}>
          <div className="relative">
            <label 
              htmlFor="phone" 
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                focusedField === "phone" ? "text-gold" : "text-navy"
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 border border-gold/30 bg-cream text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
              placeholder="+91 98765 43210"
            />
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
              focusedField === "phone" ? "w-full" : "w-0"
            }`} />
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeUp" delay={150}>
          <div className="relative">
            <label 
              htmlFor="subject" 
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                focusedField === "subject" ? "text-gold" : "text-navy"
              }`}
            >
              Subject <span className="text-gold">*</span>
            </label>
            <select
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 border border-gold/30 bg-cream text-navy focus:outline-none focus:border-gold transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="bridal">Bridal Collection</option>
              <option value="custom">Custom Design</option>
              <option value="appointment">Book Appointment</option>
              <option value="other">Other</option>
            </select>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
              focusedField === "subject" ? "w-full" : "w-0"
            }`} />
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection variant="fadeUp" delay={200}>
        <div className="relative">
          <label 
            htmlFor="message" 
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === "message" ? "text-gold" : "text-navy"
            }`}
          >
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 border border-gold/30 bg-cream text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-all duration-300 resize-none focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
            placeholder="Tell us about your inquiry..."
          />
          <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
            focusedField === "message" ? "w-full" : "w-0"
          }`} />
        </div>
      </AnimatedSection>

      <AnimatedSection variant="fadeUp" delay={250}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 font-medium tracking-wider uppercase text-sm relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </span>
          <span className="absolute inset-0 bg-gold-light transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        </button>
      </AnimatedSection>
    </form>
  )
}
