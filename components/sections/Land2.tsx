'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const phrases = [
  "We help businesses ",
  "streamline operations, scale faster,",
  " and make data-driven decisions  ",
  "through innovative technology",
  "and thoughtful design."
];

export default function Description() {
  return (
    <div className="relative text-white text-[3vw] uppercase mt-[30vw] ml-[10vw]">
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  const text = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.out',
    });
  }, []);

  return (
    <p ref={text} className="relative m-0">
      {children}
    </p>
  );
}