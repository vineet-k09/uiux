import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Intro() {
  const background = useRef<HTMLDivElement | null>(null);
  const introImage = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=500px',
      },
    });

    timeline
      .from(background.current, { clipPath: 'inset(15%)' })
      .to(introImage.current, { height: '200px' }, 0);
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      
      {/* Background Image */}
      <div
        ref={background}
        className="absolute w-full h-[140vh] brightness-[0.6]"
      >
        <Image
          src="/landing_centre1.png"
          alt="background image"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Intro Section */}
      <div className="relative mt-[35vh] flex justify-center">
        
        {/* Intro Image */}
        <div
          ref={introImage}
          className="absolute w-87.5 h-118.75 brightness-[0.7]"
        >
          <Image
            src="/landing_centre2.png"
            alt="intro image"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Text */}
        <h1 className="z-3 text-white text-[3vw] text-center whitespace-nowrap">
          Building Smarter Solutions for a Digital-First World
        </h1>

      </div>
    </div>
  );
}