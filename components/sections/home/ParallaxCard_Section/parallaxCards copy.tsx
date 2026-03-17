
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

      const statCards = gsap.utils.toArray<HTMLElement>(".stat-card")
      gsap.from(statCards, {
        scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)",
        scrollTrigger: { trigger: statCards[0], start: "top 85%" },
      })

      gsap.utils.toArray<HTMLElement>(".why-card").forEach((card) => {
        gsap.from(card, {
          scale: 0.85, opacity: 0, y: 30, duration: 0.6, ease: "back.out(1.7)",
          scrollTrigger: { trigger: card, start: "top 90%" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".value-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 20, duration: 0.5, delay: i * 0.1, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.from(step, {
          opacity: 0, y: 20, duration: 0.5, delay: i * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: step, start: "top 95%" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".industry-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, scale: 0.9, duration: 0.4, delay: i * 0.07, ease: "back.out(1.4)",
          scrollTrigger: { trigger: card, start: "top 95%" },
        })
      })

      gsap.utils.toArray<HTMLElement>("[data-value]").forEach((num) => {
        const end = Number(num.dataset.value)
        gsap.fromTo(num, { innerText: 0 }, {
          innerText: end, duration: 1.8, ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: num, start: "top 80%" },
        })
      })
    },
    { scope: container }
  )

  return (
    <main ref={container}>
      {stickyCardsData.stickyCardsData.map((card, index) => (
        <section
          key={index}
          className="sticky-card relative w-full h-svh p-8 flex gap-10 text-white will-change-transform max-[1000px]:flex-col max-[1000px]:gap-0
bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-(--after-opacity) transition-opacity duration-100 pointer-events-none z-20" />

          {/* LEFT SIDE */}
          <div className="mt-16 w-72 relative z-50 max-[1000px]:w-full max-[1000px]:h-55 shrink-0">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              {card.image ? (
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="288px" priority={index === 0} />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,85,116,0.45),transparent_40%),linear-gradient(135deg,#1a1a2a,#0f0f14)]" />
              )}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-16 flex-1 pt-2 pb-8 relative z-50 flex flex-col justify-between min-h-0">

            {/* ── WHO ARE WE ── */}
            {card.type === "who" && (
              <>
                <div className="flex flex-col gap-3">
                  <h2 className="text-5xl font-bold text-white">{card.title}</h2>
                  <SplitFadeText text={card.description} className="text-white/80 text-lg" />
                  {"mission" in card && (
                    <p className="text-base text-white leading-relaxed border-l-2 border-pink-500 pl-4 max-w-2xl">
                      {(card as any).mission}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {card.tags?.map((tag: string) => (
                      <span key={tag} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-5">
                  {card.stats?.map((stat: any) => (
                    <div key={stat.label} className="stat-card p-6 bg-white/10 border border-white/15 rounded-2xl text-center">
                      <div className="text-4xl font-bold text-white">
                        <span data-value={stat.value}>0</span>{stat.suffix}
                      </div>
                      <div className="text-md text-white mt-2 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Values */}
                {"values" in card && (
                  <div>
                    <p className="text-md uppercase tracking-widest text-white mb-3">Our values</p>
                    <div className="grid grid-cols-3 gap-4">
                      {(card as any).values.map((v: any) => (
                        <div key={v.title} className="value-card p-5 rounded-2xl bg-white/8 border border-white/12 hover:border-pink-500/50 transition">
                          <div className="text-2xl mb-2">{v.icon}</div>
                          <p className="text-base font-semibold text-white mb-1">{v.title}</p>
                          <p className="text-md text-white/60 leading-relaxed">{v.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline */}
                {"milestones" in card && (
                  <div>
                    <p className="text-md uppercase tracking-widest text-white mb-4">Our journey</p>
                    <div className="relative flex items-start">
                      <div className="absolute top-[6px] left-0 right-0 h-px bg-white/15" />
                      {(card as any).milestones.map((m: any, i: number) => (
                        <div key={i} className="relative flex-1 flex flex-col items-center gap-2 px-2">
                          <div className="w-3 h-3 rounded-full bg-pink-500 ring-4 ring-pink-500/20 z-10 shrink-0" />
                          <span className="text-md font-bold text-pink-400">{m.year}</span>
                          <span className="text-md text-white text-center leading-tight">{m.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ── WHY US ── */}
            {card.type === "why" && (
              <>
                <div className="flex flex-col gap-2">
                  <h2 className="text-5xl font-bold text-white">{card.title}</h2>
                  <SplitFadeText text={card.description} className="text-white/80 text-lg" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {card.cards?.map((item: any) => (
                    <div key={item.title} className="why-card p-5 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 hover:border-pink-500/40 transition">
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-md text-white/65 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                {"process" in card && (
                  <div>
                    <p className="text-md uppercase tracking-widest text-white mb-3">How we work</p>
                    <div className="grid grid-cols-4 gap-4">
                      {(card as any).process.map((p: any) => (
                        <div key={p.step} className="process-step flex flex-col gap-2 p-5 rounded-2xl border border-white/15 bg-white/8 hover:border-pink-500/40 transition">
                          <span className="text-pink-400 text-sm font-bold">{p.step}</span>
                          <span className="text-white text-base font-bold">{p.label}</span>
                          <span className="text-white/60 text-sm leading-snug">{p.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ── WHO WE SERVE ── */}
            {card.type === "serve" && (
              <>
                <div className="flex flex-col gap-2">
                  <h2 className="text-5xl font-bold text-white">{card.title}</h2>
                  <SplitFadeText text={card.description} className="text-white/80 text-lg" />
                </div>

                <div>
                  <p className="text-md uppercase tracking-widest text-white mb-4">Trusted by</p>
                  <div className="grid grid-cols-5 gap-10 items-center">
                    {card.logos?.map((logo: string) => (
                      <div key={logo} className="relative h-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300">
                        <Image src={logo} alt="company logo" fill className="object-contain brightness-0 invert" />
                      </div>
                    ))}
                  </div>
                </div>

                {"industries" in card && (
                  <div>
                    <p className="text-md uppercase tracking-widest text-white mb-3">Industries we serve</p>
                    <div className="grid grid-cols-3 gap-4">
                      {(card as any).industries.map((ind: any) => (
                        <div key={ind.name} className="industry-card p-5 rounded-2xl border border-white/15 bg-white/8 hover:border-pink-500/40 transition">
                          <p className="text-base font-bold text-white mb-1">{ind.name}</p>
                          <p className="text-sm text-white/60 leading-snug">{ind.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {"testimonials" in card && (
                  <div className="grid grid-cols-2 gap-4">
                    {(card as any).testimonials.map((t: any) => (
                      <div key={t.author} className="p-5 rounded-2xl bg-white/8 border border-white/15">
                        <p className="text-white/80 text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-sm font-bold shrink-0">
                            {t.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{t.author}</p>
                            <p className="text-xs text-white/50">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

          </div>
        </section>
      ))}
    </main>
  )
}