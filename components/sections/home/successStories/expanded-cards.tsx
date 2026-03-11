"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { AlertTriangle, Wrench, TrendingUp } from "lucide-react"
import storiesData from "@/data/successStories.json"

type Story = {
  title: string
  domain: string
  image: string
  challenge: string
  solution: string
  result: string
}

const stories: Story[] = storiesData.stories

export default function SuccessStories1() {

  const [active, setActive] = useState<number | null>(null)

  return (

    <section className="w-full py-28 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-14">
          Success Stories
        </h2>


        <motion.div layout className="flex gap-3">

          {stories.map((story: Story, i: number) => {

            const isActive = active === i

            return (

              <motion.div
                layout
                key={i}
                className="relative rounded-xl overflow-hidden bg-neutral-900 cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  width: isActive ? 800 : 220,
                  opacity: active === null || isActive ? 1: 0.65
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                    }}
              >

                {/* LEFT IMAGE */}

                <div className="relative w-[220px] h-[400px] shrink-0 overflow-hidden">

                    <motion.div
                        animate={{
                        scale: isActive ? 1.08 : 1,
                        x: isActive ? -8 : 0
                        }}
                        transition={{
                        duration: 0.6,
                        ease: "easeOut"
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                        />
                    </motion.div>

  <div className="absolute inset-0 bg-black/40" />

                  

                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">

  {/* TOP TAG */}
  <div>
    <span className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded">
      {story.domain}
    </span>
  </div>

  {/* BOTTOM TITLE */}
  <div>
    <h3 className="text-lg font-semibold leading-tight">
      {story.title}
    </h3>
  </div>


                  </div>

                </div>


                {/* EXPANDED PANEL */}

                <motion.div
                    layout
                  className="absolute left-[220px] top-0 w-[340px] h-full p-6 flex flex-col gap-4"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 80
                    }}
                    transition={{
                    duration: 0.35,
                    ease: "easeOut"
                    }}
                  
                >

                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18}/>
                    <h4 className="font-semibold">Challenge</h4>
                  </div>

                  <p className="text-sm opacity-80">
                    {story.challenge}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <Wrench size={18}/>
                    <h4 className="font-semibold">Solution</h4>
                  </div>

                  <p className="text-sm opacity-80">
                    {story.solution}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <TrendingUp size={18}/>
                    <h4 className="font-semibold">Result</h4>
                  </div>

                  <p className="text-sm opacity-80">
                    {story.result}
                  </p>

                </motion.div>

              </motion.div>

            )
          })}

        </motion.div>

      </div>

    </section>

  )
}