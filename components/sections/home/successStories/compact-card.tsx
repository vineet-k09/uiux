"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface Story {
  title: string
  domain: string
  image: string
  challenge: string
  solution: string
  result: string
}

export default function CompactCard({ story }: { story: Story }) {

  return (
    <motion.div
      className="story-card relative w-[260px] h-[340px] shrink-0 rounded-xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.03 }}
    >

      <Image
        src={story.image}
        alt={story.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-0 p-4">

        <span className="text-xs bg-white/20 px-2 py-1 rounded">
          {story.domain}
        </span>

        <h3 className="text-lg font-semibold mt-2">
          {story.title}
        </h3>

      </div>

    </motion.div>
  )
}