"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
  );

  return (
    <div ref={ref} className="relative h-screen">
      {/* Sticky black panel that reveals via clip-path */}
      <motion.div
        style={{ clipPath }}
        className="fixed inset-0 z-0 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-viva" />
        <h2
          className="relative text-viva-foreground font-bold leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(6rem, 25vw, 28rem)" }}
        >
          viva
        </h2>
      </motion.div>
    </div>
  );
};

export default Footer;
