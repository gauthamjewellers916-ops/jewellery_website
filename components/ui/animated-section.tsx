"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fade"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
}

const variantStyles: Record<AnimationVariant, { initial: string; animate: string }> = {
  fadeUp: {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  fadeDown: {
    initial: "opacity-0 -translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  fadeLeft: {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  fadeRight: {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  fade: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
}

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({ threshold })

  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isInView ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
