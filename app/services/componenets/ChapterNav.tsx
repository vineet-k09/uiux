"use client"

import { motion } from "framer-motion"
import { Domain } from "@/types/services"

export const DOMAIN_COLORS: Record<string, string> = {
    "customer-care": "#6366f1",
    "data-analytics": "#10b981",
    "cloud-services": "#0ea5e9",
    "cyber-security": "#f43f5e",
    "ai-automation": "#8b5cf6",
}

interface ChapterNavProps {
    domains: Domain[]
    activeDomainId: string
    onDomainClick: (id: string) => void
}

export default function ChapterNav({
    domains,
    activeDomainId,
    onDomainClick,
}: ChapterNavProps) {
    return (
        <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col items-start justify-center gap-6 px-8 border-r border-neutral-800/60 backdrop-blur-sm z-30">

            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px 
            
            pointer-events-none" />

            {domains.map((domain) => {
                const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
                const isActive = activeDomainId === domain.id

                return (
                    <motion.button
                        key={domain.id}
                        onClick={() => onDomainClick(domain.id)}
                        className="relative z-10 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="px-5 py-3 rounded-xl text-base font-medium border w-full text-left"
                            animate={{
                                backgroundColor: isActive ? `${color}20` : "transparent",
                                borderColor: isActive ? `${color}60` : "#262626",
                                color: isActive ? "#ffffff" : "#a3a3a3",
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {domain.name}
                        </motion.div>

                        {isActive && (
                            <motion.div
                                layoutId="chapterIndicator"
                                className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full"
                                style={{ backgroundColor: color }}
                                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                            />
                        )}
                    </motion.button>
                )
            })}
        </aside>
    )
}