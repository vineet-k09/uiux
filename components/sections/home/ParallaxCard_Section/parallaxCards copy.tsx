"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import stickyCardsData from "../../../../data/stickycards.json"
import SplitFadeText from "@/components/motion/SplitText"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxCardstrial() {
  const container = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const stickyCardsEls = gsap.utils.toArray<HTMLElement>(".sticky-card")

      stickyCardsEls.forEach((card, index) => {
        if (index < stickyCardsEls.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCardsEls[stickyCardsEls.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          })

          ScrollTrigger.create({
            trigger: stickyCardsEls[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress
              gsap.set(card, {
                scale: 1 - progress * 0.25,
                rotation: (index % 2 === 0 ? 5 : -5) * progress,
                "--after-opacity": progress,
              } as gsap.TweenVars)
            },
          })
        }
      })

      /* -------------------------------
         WHO ARE WE STATS ANIMATION
      --------------------------------*/

      const statCards = gsap.utils.toArray<HTMLElement>(".stat-card")

      gsap.from(statCards, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statCards[0],
          start: "top 85%",
        },
      })

      const whyCards = gsap.utils.toArray<HTMLElement>(".why-card")

      gsap.utils.toArray<HTMLElement>(".why-card").forEach((card) => {
      gsap.from(card, {
          scale: 0.85,
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        })
      })

      /* number increment animation */

      const numbers = gsap.utils.toArray<HTMLElement>("[data-value]")

      numbers.forEach((num) => {
        const end = Number(num.dataset.value)

        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: end,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: num,
              start: "top 90%",
            },
          }
        )
      })
    },
    { scope: container }
  )

  return (
    <main ref={container}>
      {stickyCardsData.stickyCardsData.map((card, index) => (
        <section
          key={index}
className="sticky-card relative w-full h-svh p-6 flex gap-12 text-white will-change-transform max-[1000px]:flex-col max-[1000px]:gap-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]"           >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-[var(--after-opacity)] transition-opacity duration-100 pointer-events-none z-20" />

          {/* LEFT SIDE */}
          <div className="mt-20 w-[280px] relative z-50 max-[1000px]:w-full max-[1000px]:h-[220px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              {card.image ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority={index === 0}
                />
              ) : (
                // fallback gradient if no image provided
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,85,116,0.45),transparent_40%),linear-gradient(135deg,#1a1a2a,#0f0f14)]" />
              )}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-20 flex-4 pt-6 relative z-50 ">

            {/* WHO ARE WE */}
            {card.type === "who" && (
              <div className="flex flex-col gap-6 max-w-xl">
                <h2 className="text-4xl font-semibold">{card.title}</h2>
                <SplitFadeText text={card.description} className="text-white"/>
                

                {/* tags */}
                <div className="flex flex-wrap gap-2 text-black">
                  {card.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 text-black">
                  {card.stats?.map((stat: any) => (
                    <div
                      key={stat.label}
                      className="stat-card p-4 bg-neutral-100 rounded-xl text-center"
                    >
                      <div className="text-2xl font-semibold">
                        <span data-value={stat.value}>0</span>
                        {stat.suffix}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHY US */}
            {card.type === "why" && (
              <div className="flex flex-col gap-8">
                <h2 className="text-4xl font-semibold">{card.title}</h2>
                <SplitFadeText text={card.description} />
                


                <div className="grid md:grid-cols-3 gap-6">
                  {card.cards?.map((item: any) => (
                    <div
                      key={item.title}
                      className="why-card p-6 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-700">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHO WE SERVE */}
            {card.type === "serve" && (
              <div className="flex flex-col gap-10">
                <h2 className="text-4xl font-semibold">{card.title}</h2>
                <SplitFadeText text={card.description} />

                <div className="grid grid-cols-3 md:grid-cols-5 gap-12 items-center">
                  {card.logos?.map((logo: string) => (
                    <div
                      key={logo}
                      className="relative h-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
                    >
                      <Image
                        src={logo}
                        alt="company logo"
                        fill
                        className="h-full w-full object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  )
}