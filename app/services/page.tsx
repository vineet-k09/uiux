"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import domainsData from "@/data/services.json";
import { Domain } from "@/types/services";
import ChapterNav from "@/components/sections/services/ChapterNav";
import DomainSection from "@/components/sections/services/DomainSection";
import ParticleBackground from "@/components/ui/ParticleBackground";

const domains = domainsData.domains as Domain[];

export default function Services() {
  const [activeDomainId, setActiveDomainId] = useState(domains[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = sectionRefs.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDomainId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  const scrollToDomain = useCallback((id: string) => {
    setActiveDomainId(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-[#2A0134]" suppressHydrationWarning>
      <ParticleBackground />
      <div className="
       pb-10">
        <div className="z-30 w-full h-40 solid ">
          <ChapterNav
            domains={domains}
            activeDomainId={activeDomainId}
            onDomainClick={scrollToDomain}
            />
        </div>
        <main className="h-max px-10">
          {domains.map((domain, i) => (
            <DomainSection
            key={domain.id}
            domain={domain}
            index={i}
            ref={(el: HTMLElement | null) => {
                sectionRefs.current[i] = el;
              }}
              />
            ))}
        </main>
      </div>
    </div>
  );
}