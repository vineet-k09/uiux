"use client"

import Projects from '@/components/sections/home/Projects';
import ParallaxCardstrial from './ParallaxCard_Section/parallaxCards copy';
import Value from '@/components/sections/home/Value';
import ContactUs from '@/components/sections/home/ContactUs';
import { useEffect } from 'react';
import ParticleBackground from '@/components/ui/ParticleBackground';
import HeroContent from './HeroContent';
import WorldMapCard from './WorldMap';
import SuccessStories1 from './successStories/expanded-cards';


export default function LandingPage() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        new LocomotiveScroll();
      }
    )()
  }, [])
  return (
      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />
          {/* glass / dim / blur layer */}
          <div className="absolute z-0 inset-0 backdrop-blur-[1px] bg-red/50 border border-white/10"></div>
          <div className='z-20'>
          <HeroContent />
          </div>
        </section>
        <WorldMapCard/>
        <Projects />
        <ParallaxCardstrial />
        <Value />
        <SuccessStories1 />
        <ContactUs />
      </main>
  )
}
