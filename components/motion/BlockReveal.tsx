"use client"

import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type BlockRevealProps = {
  children: ReactNode
  delay?: number
}

export default function BlockReveal({ children, delay = 0 }: BlockRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hide text initially
      gsap.set(textRef.current, { visibility: "hidden" })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })

      tl.to(blockRef.current, {
        scaleX: 1,
        duration: 0.5,
        transformOrigin: "left",
        ease: "power2.out",
        delay
      })

      // Reveal text exactly when block covers it
      tl.set(textRef.current, { visibility: "visible" })

      tl.to(blockRef.current, {
        scaleX: 0,
        duration: 0.5,
        transformOrigin: "right",
        ease: "power2.in"
      })

    }, containerRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <div
      ref={containerRef}
      className="relative inline-block overflow-hidden py-[0.1em]"
    >
      <div ref={textRef}>
        {children}
      </div>

      <div
        ref={blockRef}
        className="absolute inset-0 pointer-events-none origin-left scale-x-0 bg-gradient-to-r from-[#ff5874] to-[#e767f9]"
      />
    </div>
  )
}