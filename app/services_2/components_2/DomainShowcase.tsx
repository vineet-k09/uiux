"use client";

import { useState, useEffect } from "react";
import { domains } from "@/data/services.json";
import TopicCard from "./TopicCard";
import TopicDetail from "./TopicDetail";

const AUTOPLAY_INTERVAL = 4000;

export default function DomainShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  const activeDomain = domains[activeIndex];

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || paused) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 50 / AUTOPLAY_INTERVAL;
        return next >= 1 ? 1 : next;
      });
    }, 50);

    const slideTimer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % domains.length);
      setProgress(0);
    }, AUTOPLAY_INTERVAL);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [activeIndex, paused, mounted]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 2000);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-viva flex flex-col md:flex-row p-4 md:p-6 lg:p-10">
      <div className="w-full max-w-7xl lg:max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">

        {/* Navigation */}
        <div className="md:w-[260px] lg:w-[320px] shrink-0 md:flex md:items-center">
          <div
            className="flex md:flex-col gap-2 
            overflow-x-auto md:overflow-x-visible 
            md:overflow-y-auto md:max-h-[75vh] lg:max-h-[85vh]
            pb-2 md:pb-0 md:pr-1 scrollbar-thin w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <h1 className="hidden md:block text-xs font-semibold uppercase tracking-widest text-[hsl(0,0%,55%)] mb-3 px-1">
              Domains
            </h1>

            {domains.map((domain, i) => (
              <TopicCard
                key={domain.id}
                domain={domain}
                isActive={i === activeIndex}
                onClick={() => handleClick(i)}
                index={i}
                progress={i === activeIndex ? progress : 0}
              />
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div
  className="flex-1 min-h-0 py-4 md:py-6 lg:py-8"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  <TopicDetail domain={activeDomain} />
</div>

      </div>
    </div>
  );
}