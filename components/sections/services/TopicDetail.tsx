"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UseCase } from "@/types/services";
import { CometCard } from "@/components/ui/comet-card";

interface TopicDetailProps {
  domain: UseCase;
  accentColor: string;
}

// Deterministic pattern picker based on title
const getPatternIndex = (title: string) => {
  let hash = 0;
  for (let i = 0; i < title.length; i++)
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash) % 5;
};
const TechPattern = ({
  accentColor,
  seed,
}: {
  accentColor: string;
  seed: number;
}) => {
  // scanlines for #E60000 domains, dots for #9C2AA0 domains
  const isScanlines = accentColor === "#E60000";

  if (isScanlines)
    return (
      <svg
        key="scanlines"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`scan-${seed}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40 L40 0"
              stroke={accentColor}
              strokeWidth="0.75"
              strokeOpacity="0.2"
            />
            <path
              d="M-10 40 L30 0"
              stroke={accentColor}
              strokeWidth="0.4"
              strokeOpacity="0.1"
            />
            <path
              d="M10 40 L50 0"
              stroke={accentColor}
              strokeWidth="0.4"
              strokeOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#scan-${seed})`} />
        <rect
          x="10%"
          y="20%"
          width="18%"
          height="2"
          rx="1"
          fill={accentColor}
          fillOpacity="0.15"
        />
        <rect
          x="60%"
          y="60%"
          width="25%"
          height="2"
          rx="1"
          fill={accentColor}
          fillOpacity="0.1"
        />
        <rect
          x="30%"
          y="75%"
          width="12%"
          height="2"
          rx="1"
          fill={accentColor}
          fillOpacity="0.12"
        />
      </svg>
    );

  return (
    <svg
      key="dots"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`dots-${seed}`}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="12"
            cy="12"
            r="1.5"
            fill={accentColor}
            fillOpacity="0.35"
          />
          <circle cx="0" cy="0" r="1" fill={accentColor} fillOpacity="0.15" />
          <circle cx="24" cy="0" r="1" fill={accentColor} fillOpacity="0.15" />
          <circle cx="0" cy="24" r="1" fill={accentColor} fillOpacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${seed})`} />
    </svg>
  );
};

const TopicDetail = ({ domain, accentColor }: TopicDetailProps) => {
  const sections = [
    { label: "Problem", text: domain.problem },
    { label: "Solution", text: domain.solution },
    { label: "Impact", text: domain.impact },
  ];

  const patternSeed = getPatternIndex(domain.title);

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
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${accentColor}59, transparent 40%),
                             radial-gradient(circle at 80% 80%, ${accentColor}40, transparent 40%),
                             linear-gradient(135deg, #0f0f14 0%, #151521 40%, #1a1a2a 100%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-5 px-6 pb-8 mt-3">
              {/* Title */}
              <h4 className="font-bold text-white text-1xl md:text-2xl">
                {domain.title}
              </h4>

              {/* Divider */}
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
                        className="px-2.5 py-0.5 rounded-full font-semibold text-md uppercase tracking-wider"
                        style={{
                          backgroundColor: accentColor + "15",
                          color: accentColor,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    <p className="text-white leading-relaxed text-[13px] pl-4">
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
