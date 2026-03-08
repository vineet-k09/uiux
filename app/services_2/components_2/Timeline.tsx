'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { RefObject } from "react"

interface TimelineProps {
  target: RefObject<HTMLElement>
}

export default function Timeline({ target }: TimelineProps) {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"] // line animates along container only
  })

  const lineLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="absolute left-[120px] top-0 h-full w-[10px] pointer-events-none z-0">
      <svg
        className="h-full w-full"
        viewBox="0 0 2 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="timelineGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
          >
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="purple" />
          </linearGradient>
        </defs>

        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          stroke="url(#timelineGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength: lineLength }}
        />
      </svg>
    </div>
  )
}