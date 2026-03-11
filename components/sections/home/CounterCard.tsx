import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface CounterCardProps {
  endValue: number;
  suffix: string;
  label: string;
  delay: number;
  duration?: number;
}

function useCounter(end: number, duration: number, delay: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [end, duration, delay, start]);

  return count;
}

export default function CounterCard({ endValue, suffix, label, delay, duration = 1.5 }: CounterCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(endValue, duration, delay, isInView);

  return (
    <motion.div
      ref={ref}
      className="flex-1 flex flex-col items-center justify-center px-4 py-5 min-w-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <p
        className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#e0e0e0] tabular-nums"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {count.toLocaleString()}{suffix}
      </p>
      <p
        className="text-xs md:text-sm text-[#8c8c8c] mt-1.5 text-center leading-tight"
        style={{ fontFamily: "'Spline Sans', sans-serif" }}
      >
        {label}
      </p>
    </motion.div>
  );
}