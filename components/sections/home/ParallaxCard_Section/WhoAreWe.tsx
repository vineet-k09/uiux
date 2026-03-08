"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  data: {
    title: string
    description: string
    tags: string[]
    stats: { label: string; value: number; suffix?: string }[]
  }
}

export default function WhoAreWe({ data }: Props) {
  const container = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stat-card")

      // Pop-in animation
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      })

      // Number counter animation
      const numbers = gsap.utils.toArray<HTMLElement>("[data-value]")

      numbers.forEach((el) => {
        const end = Number(el.dataset.value)

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: end,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        )
      })

      // Spotlight hover
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          card.style.setProperty("--x", `${x}px`)
          card.style.setProperty("--y", `${y}px`)
        })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="flex flex-col gap-6 text-black">
      <h2 className="text-4xl font-semibold">{data.title}</h2>

      <p className="text-lg max-w-xl">{data.description}</p>

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-neutral-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {data.stats.map((stat) => (
          <div
            key={stat.label}
            className="
            stat-card
            relative
            p-6
            rounded-xl
            bg-neutral-100
            text-center
            transition
            duration-300
            hover:scale-105
            border
            border-transparent
            hover:border-purple-400
            hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
            overflow-hidden
            "
          >
            {/* spotlight */}
            <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at var(--x) var(--y), rgba(168,85,247,0.25), transparent 40%)",
                }}
              />
            </div>

            <div className="text-3xl font-semibold tracking-tight">
              <span data-value={stat.value}>0</span>
              {stat.suffix ?? "+"}
            </div>

            <div className="text-sm text-neutral-600 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}