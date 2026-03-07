"use client"

import { motion } from "framer-motion"
import { AlertCircle, Lightbulb, Zap } from "lucide-react"
import type { UseCase } from "./usecase-panel"

interface UseCaseCardNewProps {
    useCase: UseCase
    accentColor: string
    index: number
}

export default function UseCaseCardNew({
    useCase,
    accentColor,
    index,
}: UseCaseCardNewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col bg-neutral-900/60 border border-neutral-800
                       rounded-2xl p-5 hover:border-neutral-700/80
                       transition-all duration-300 overflow-hidden cursor-default"
        >
            {/* Top accent line — reveals on hover */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: accentColor }}
            />

            {/* Radial glow on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${accentColor}18, transparent 70%)`,
                }}
            />

            {/* Title */}
            <h4 className="relative z-10 text-sm font-semibold text-white mb-4 leading-snug">
                {useCase.title}
            </h4>

            {/* Problem & Solution */}
            <div className="relative z-10 space-y-3 flex-1">
                <div className="flex gap-2.5">
                    <AlertCircle
                        size={12}
                        className="mt-0.5 shrink-0 text-neutral-600"
                    />
                    <p className="text-[11px] text-neutral-500 leading-relaxed">
                        {useCase.problem}
                    </p>
                </div>

                <div className="flex gap-2.5">
                    <Lightbulb
                        size={12}
                        className="mt-0.5 shrink-0 transition-colors duration-300"
                        style={{ color: accentColor + "cc" }}
                    />
                    <p className="text-[11px] text-neutral-300 leading-relaxed">
                        {useCase.solution}
                    </p>
                </div>
            </div>

            {/* Impact footer */}
            <div className="relative z-10 mt-4 pt-3 border-t border-neutral-800/80 flex gap-2 items-start">
                <Zap size={11} className="mt-0.5 shrink-0 text-emerald-400" />
                <p className="text-[11px] text-emerald-400 leading-relaxed font-medium">
                    {useCase.impact}
                </p>
            </div>
        </motion.div>
    )
}
