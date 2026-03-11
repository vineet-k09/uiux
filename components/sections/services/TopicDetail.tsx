"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UseCase } from "@/types/services";

interface TopicDetailProps {
  domain: UseCase;
  accentColor: string;
}

const TopicDetail = ({ domain, accentColor }: TopicDetailProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border 
        border-[hsl(0,0%,16%)] bg-[hsl(0,0%,7%)]
        shadow-lg max-h-[40vh] 
        flex overflow-y-auto"
      >
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group rounded-xl border 
            border-[hsl(0,0%,16%)] 
            bg-[hsl(0,0%,9%)] md:p-7 relative 
            overflow-hidden"
          >
            {/* hover glow */}
            <div
              className="
            absolute inset-0 
            opacity-0 group-hover:opacity-50 
            transition-opacity duration-500 
            pointer-events-none
            bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]
          "
            />

            <div className="relative z-10 space-y-5">
              {/* title */}
              <h4 className="font-bold text-white text-lg md:text-xl">
                {domain.title}
              </h4>

              {/* Problem → Solution → Impact */}
              <div className="flex flex-col md:flex-row items-stretch gap-2 text-base md:text-lg">
                {/* Problem */}
                <div className="flex-1 flex flex-col items-center text-center p-4">
                  <div
                    className="w-3 h-3 rounded-full border-2 mb-3"
                    style={{
                      backgroundColor: accentColor,
                      borderColor: accentColor + "40",
                    }}
                  />

                  <span
                    className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
                    style={{
                      backgroundColor: accentColor + "15",
                      color: accentColor,
                    }}
                  >
                    Problem
                  </span>

                  <p className="text-white/90 leading-relaxed">
                    {domain.problem}
                  </p>
                </div>

                {/* connector */}
                <div className="hidden md:flex items-center">
                  <div
                    className="w-10 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${accentColor}80, transparent)`,
                    }}
                  />
                </div>

                {/* Solution */}
                <div className="flex-1 flex flex-col items-center text-center p-4">
                  <div
                    className="w-3 h-3 rounded-full border-2 mb-3"
                    style={{
                      backgroundColor: accentColor,
                      borderColor: accentColor + "40",
                    }}
                  />

                  <span
                    className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
                    style={{
                      backgroundColor: accentColor + "15",
                      color: accentColor,
                    }}
                  >
                    Solution
                  </span>

                  <p className="text-white/90 leading-relaxed">
                    {domain.solution}
                  </p>
                </div>

                {/* connector */}
                <div className="hidden md:flex items-center">
                  <div
                    className="w-10 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${accentColor}80, transparent)`,
                    }}
                  />
                </div>

                {/* Impact */}
                <div className="flex-1 flex flex-col items-center text-center p-4">
                  <div
                    className="w-3 h-3 rounded-full border-2 mb-3"
                    style={{
                      backgroundColor: accentColor,
                      borderColor: accentColor + "40",
                    }}
                  />

                  <span
                    className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
                    style={{
                      backgroundColor: accentColor + "15",
                      color: accentColor,
                    }}
                  >
                    Impact
                  </span>

                  <p className="text-white/90 leading-relaxed">
                    {domain.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopicDetail;
