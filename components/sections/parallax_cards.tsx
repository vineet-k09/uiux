
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxCards() {
  const container = useRef<HTMLDivElement | null>(null);

  const stickyCardsData = [
    {
      index: '01',
      title: 'What is Big brain department',
      image: '/sticky-cards/card_1.png',
      description:
        'Every element is built to snap into place. We design modular systems where clarity, structure, and reuse come first—no clutter, no excess.',
    },
    {
      index: '02',
      title: 'Who we serve',
      image: '/sticky-cards/card_2.png',
      description:
        'From soft gradients to hard edges, our design language draws from real-world materials—elevating interfaces that feel both digital and tangible.',
    },
    {
      index: '03',
      title: 'How we work',
      image: '/sticky-cards/card_3.png',
      description:
        'Details matter. We work with intention—aligning pixels, calibrating contrast, and obsessing over every edge until it just feels right.',
    }
  ];

  useGSAP(
    () => {
      const stickyCards = gsap.utils.toArray<HTMLElement>('.sticky-card');

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: stickyCards[stickyCards.length - 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
          });

          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(card, {
                scale: 1 - progress * 0.25,
                rotation: (index % 2 === 0 ? 5 : -5) * progress,
                '--after-opacity': progress,
              } as gsap.TweenVars);
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      {stickyCardsData.map((card) => (
        <section
          key={card.index}
          className="sticky-card relative w-full h-[100svh] p-6 flex gap-12 bg-white will-change-transform max-[1000px]:flex-col max-[1000px]:gap-0 "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-[var(--after-opacity)] transition-opacity duration-100 pointer-events-none z-20" />

          {/* Index */}
          <div className="flex-[2] text-2xl font-medium relative z-50 text-black">
            {card.index}
          </div>

          {/* Content */}
          <div className="flex-[4] pt-6">
            <div className="w-3/4 flex flex-col gap-6 max-[1000px]:w-full text-black">
              <h2 className="text-4xl font-semibold  relative z-50">
                {card.title}
              </h2>

              <div className="flex gap-6 max-[1000px]:flex-col max-[1000px]:gap-2">
                <p className="flex-[4] text-base leading-relaxed relative z-50">
                  {card.description}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-[4]">
            <div className="aspect-[5/3] relative">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}