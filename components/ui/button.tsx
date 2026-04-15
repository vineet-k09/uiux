"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FancyMotionButton({title="Send Message"}: {title?:string}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMove}
      className="relative overflow-hidden px-8 py-4 font-medium text-white rounded-lg bg-linear-to-r from-pink-500 to-purple-500
      shadow-lg shadow-purple-500/30 group"
    >
      {/* expanding hover circle */}
      <span
        className="pointer-events-none absolute w-0 h-0 group-hover:w-125 group-hover:h-125
        bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
        style={{
          left: pos.x,
          top: pos.y,
        }}
      />

      <span className="relative z-10">{title}</span>
    </motion.button>
  );
}