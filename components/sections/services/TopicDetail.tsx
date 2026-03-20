"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UseCase } from "@/types/services";
import { CometCard } from "@/components/ui/comet-card";

interface TopicDetailProps {
  domain: UseCase;
  accentColor: string;
}

const TopicDetail = ({ domain, accentColor }: TopicDetailProps) => {
  const sections = [
    { label: "Problem", text: domain.problem },
    { label: "Solution", text: domain.solution },
    { label: "Impact", text: domain.impact },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <CometCard rotateDepth={4} translateDepth={6} className="h-full">
          <div className="group rounded-2xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,9%)] relative overflow-hidden flex flex-col h-full">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-50 
              transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${accentColor}59, transparent 40%),
                  radial-gradient(circle at 80% 80%, ${accentColor}40, transparent 40%),
                  linear-gradient(135deg, #0f0f14 0%, #151521 40%, #1a1a2a 100%)`,
              }}
            />

            {/* Content */}
            <div className="z-10 flex flex-col gap-5 px-6 pb-8 pt-4">
              <h4 className="font-bold text-white text-1xl md:text-2xl">
                {domain.title}
              </h4>

              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(to right, ${accentColor}60, transparent)`,
                }}
              />

              {/* Problem → Solution → Impact */}
              <div className="flex flex-col gap-5">
                {sections.map(({ label, text }, i) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full
                        font-semibold text-md uppercase tracking-wider"
                        style={{
                          backgroundColor: accentColor + "15",
                          color: accentColor,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    <p className="text-white text-[13px] pl-5">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CometCard>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopicDetail;
