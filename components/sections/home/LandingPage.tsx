"use client"

import Intro from '@/components/sections/home/Header';
import Description from '@/components/sections/home/Description';
import Projects from '@/components/sections/home/Projects';
import ParallaxCards from '@/components/sections/home/parallaxCards';
import { useEffect } from 'react';

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
      <main >
        <Intro />
        <Description />
        <Projects />
        <ParallaxCards/>
      </main>
  )
}
