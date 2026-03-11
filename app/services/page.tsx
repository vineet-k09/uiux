"use client";

import domainsData from "@/data/services.json";
import { useState, useRef, useEffect, useCallback } from "react";
import ChapterNav from "../../components/sections/services/ChapterNav";
import DomainSection from "../../components/sections/services/DomainSection";
import { Domain } from "@/types/services";
import { AnimatePresence, motion } from "framer-motion";

const domains = domainsData.domains as Domain[];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollLock = useRef(false);

  const scrollToDomain = (id: string) => {
    const index = domains.findIndex((d) => d.id === id);
    if (index !== -1) setActiveIndex(index);
  };
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollLock.current) return;
      scrollLock.current = true;
      setActiveIndex((prev) => {
        if (e.deltaY > 0) {
          return Math.min(prev + 1, domains.length - 1);
        } else {
          return Math.max(prev - 1, 0);
        }
      });
      setTimeout(() => {
        scrollLock.current = false;
      }, 700); // match animation duration
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="text-white min-h-screen flex-col" suppressHydrationWarning>
      <ChapterNav
        domains={domains}
        activeDomainId={domains[activeIndex].id}
        onDomainClick={scrollToDomain}
      />
      <main className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={domains[activeIndex].id}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5 }}
          >
            <DomainSection domain={domains[activeIndex]} index={activeIndex} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
