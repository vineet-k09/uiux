"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Domain } from "@/types/services";
import ServiceBlock from "./ServiceBlock";

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
  ({ domain }, ref) => {
    const color = DOMAIN_COLORS[domain.id] ?? "#6366f1";

    return (
        <section
          ref={ref}
          id={domain.id}
          className="pb-5 pt-5 px-12 mb-30 last:mb-0
          bg-black 
          rounded-4xl ">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
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
          </motion.div>

          <div className="relative h-px bg-white/30 my-5" />
          <div className="relative space-y-16">
            {domain.services.map((service, i) => (
              <>
              <ServiceBlock
                key={service.id}
                service={service}
                accentColor={color}
                serviceIndex={i}
                id={service.id}
              />
              <hr className="w-[80%] mx-auto my-20 last:hidden" />
              </>
            ))}
          </div>
        </section>
    );
  },
);

DomainSection.displayName = "DomainSection";
export default DomainSection;