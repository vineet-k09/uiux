"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  BarChart3,
  Cloud,
  Shield,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Domain } from "@/types/services";
import ServiceBlock from "./ServiceBlock";
import ParticleBackground from "@/components/ui/ParticleBackground";

const DOMAIN_ICONS: Record<string, LucideIcon> = {
  "customer-care": Headphones,
  "data-analytics": BarChart3,
  "cloud-services": Cloud,
  "cyber-security": Shield,
  "ai-automation": Bot,
};

export const DOMAIN_COLORS: Record<string, string> = {
  "customer-care": "#E60000",
  "data-analytics": "#9C2AA0",
  "cloud-services": "#E60000",
  "cyber-security": "#9C2AA0",
  "ai-automation": "#E60000",
};

interface DomainSectionProps {
  domain: Domain;
  index: number;
}

const DomainSection = forwardRef<HTMLElement, DomainSectionProps>(
  ({ domain, index }, ref) => {
    const Icon = DOMAIN_ICONS[domain.id] ?? Bot;
    const color = DOMAIN_COLORS[domain.id] ?? "#6366f1";
    const OPPOSITE_COLORS: Record<string, string> = {
      "#E60000": "#9C2AA0",
      "#9C2AA0": "#E60000",
    };

    const oppositeColor = OPPOSITE_COLORS[color] ?? "#9C2AA0";

    const totalUseCases = domain.services.reduce(
      (acc, s) => acc + s.use_cases.length,
      0,
    );

    return (
      <>
        <ParticleBackground />
        <section
          ref={ref}
          id={domain.id}
          className="pt-16 pb-28 px-10 lg:px-20 mt-4 mb-30 last:mb-0">
          {/* Domain background */}
          {/* <div
            className="pointer-events-none bg-gray-900 mb-30"
          /> */}

          {/* ── Domain Hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2
                  className="text-3xl xl:text-6xl 
              font-bold leading-[1.05] tracking-tight mb-3"
                >
                  {domain.name}
                </h2>
                <p className="text-[13px] leading-relaxed ">
                  {domain.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative z-10 h-px bg-white/30 my-5" />
          {/* ── Services ── */}
          <div className="relative z-10 space-y-16">
            {domain.services.map((service, i) => (
              <ServiceBlock
                key={service.id}
                service={service}
                accentColor={color}
                serviceIndex={i}
                id={service.id}
              />
            ))}
          </div>
        </section>
      </>
    );
  },
);

DomainSection.displayName = "DomainSection";
export default DomainSection;
