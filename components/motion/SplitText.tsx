"use client"

import { motion } from "framer-motion"

interface Props {
  text: string
  className?: string
}

export default function SplitFadeText({ text, className }: Props) {
  const words = text.split(" ")

  return (
    <p className={`flex flex-wrap  ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.05
          }}
          viewport={{ once: true }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}