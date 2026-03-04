
'use client';
import { useEffect } from 'react';
import Intro from '@/components/sections/Land1';
import Description from '@/components/sections/Land2';
import Projects from '@/components/sections/Land3';
import ParallaxCards from '@/components/sections/parallax_cards';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
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
