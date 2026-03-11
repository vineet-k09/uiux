"use client"

import stories from "@/data/successStories.json"
import CompactCard from "./compact-card"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function SuccessStories() {

  const container = useRef(null)

  useGSAP(() => {
    gsap.from(".story-card", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8
    })
  })

  return (
    <section className="w-full py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Success Stories
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4" ref={container}>
          {stories.map((story, i) => (
            <CompactCard
              key={i}
              story={story}
            />
          ))}
        </div>

      </div>

    </section>
  )
}