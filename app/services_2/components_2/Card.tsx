'use client'

import { motion, useTransform, MotionValue, useScroll } from "framer-motion";
import { useRef } from "react";

export interface UseCase {
  title: string
  problem: string
  solution: string
  impact: string
}

export interface Service {
  id: string
  name: string
  description: string
  use_cases: UseCase[]
}

interface CardProps {
  i: number
  service: Service
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

export default function Card({ i, service, progress, range, targetScale }: CardProps) {
  const container = useRef<HTMLDivElement | null>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col relative w-[1000px] rounded-[25px] p-8 bg-white shadow-lg min-h-[500px] max-h-[80vh]"
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transformOrigin: "top",
        }}
      >
        {/* Heading */}
        <div className="mb-4 text-black">
          <h2 className="text-3xl font-bold">{service.name}</h2>
          <p className="text-sm opacity-80 mt-2">{service.description}</p>
        </div>

        {/* Use Cases */}
        <div className="flex-1 overflow-auto space-y-4 text-black">
          {service.use_cases.map((useCase, index) => (
            <div key={index} className="border-l-2 pl-4 border-gray-300">
              <h3 className="font-semibold">{useCase.title}</h3>
              <p className="text-sm opacity-80"><strong>Problem:</strong> {useCase.problem}</p>
              <p className="text-sm opacity-80"><strong>Solution:</strong> {useCase.solution}</p>
              <p className="text-sm opacity-80"><strong>Impact:</strong> {useCase.impact}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}