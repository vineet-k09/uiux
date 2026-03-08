'use client'

import { useRef } from "react"
import { useScroll, motion } from "framer-motion"

import Card, { Service } from "./Card"
interface SectionProps {
    title: string
    description: string
    services: Service[]
    index: number
}

export default function Section({ title, description, services, index }: SectionProps) {

    const container = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const isLeft = index % 2 === 0

    return (

        <section
            ref={container}
            className="relative min-h-[250vh] flex items-center"
        >

            {/* CURVE */}
            <div className="relative">

                <div className="sticky top-[35vh]">

                    {/* TIMELINE DOT */}
                    <div className="absolute left-[125px] top-[35vh] -translate-x-1/2 z-10 flex items-center justify-center">

                        {/* glow */}
                        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-purple-600 blur-md opacity-70" />

                        {/* main dot */}
                        <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-purple-600 border border-white/40" />

                    </div>
                </div>

            </div>

            {/* CONTENT */}

            <div
                className={`flex w-full max-w-[1400px] mx-auto gap-20 
        ${isLeft ? "flex-row" : "flex-row-reverse"}`}
            >

                {/* HEADING CARD */}
<div className="w-[35%] relative">
  <div className="sticky top-[30vh] 
                  bg-white/20    /* semi-transparent white */
                 border border-white/30  /* subtle border */
                  text-white 
                  p-10 
                  rounded-xl 
                  shadow-lg">   {/* optional shadow for depth */}
    
    <h2 className="text-3xl font-semibold">{title}</h2>

    <p className="mt-4 text-sm opacity-80">
      {description}
    </p>

  </div>
</div>

                {/* STACKED CARDS */}

                <div className="w-[65%]">

                    {services.map((service, i) => {

                        const targetScale =
                            1 - ((services.length - i) * 0.05)

                        return (
                            <Card
                                key={service.id}
                                i={i}
                                service={service}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={1 - ((services.length - i) * 0.05)}
                            />
                        )

                    })}

                </div>

            </div>

        </section>

    )
}