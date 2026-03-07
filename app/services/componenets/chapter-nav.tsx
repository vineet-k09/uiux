"use client"

import { motion } from "framer-motion"
import {
    Headphones,
    BarChart3,
    Cloud,
    Shield,
    Bot,
    type LucideIcon,
} from "lucide-react"
import type { DomainItem } from "./domain-sidebar"

const DOMAIN_ICONS: Record<string, LucideIcon> = {
    "customer-care": Headphones,
    "data-analytics": BarChart3,
    "cloud-services": Cloud,
    "cyber-security": Shield,
    "ai-automation": Bot,
}

export const DOMAIN_COLORS: Record<string, string> = {
    "customer-care": "#6366f1",
    "data-analytics": "#10b981",
    "cloud-services": "#0ea5e9",
    "cyber-security": "#f43f5e",
    "ai-automation": "#8b5cf6",
}

interface ChapterNavProps {
    domains: DomainItem[]
    activeDomainId: string
    onDomainClick: (id: string) => void
}

export default function ChapterNav({
    domains,
    activeDomainId,
    onDomainClick,
}: ChapterNavProps) {
    return (
        <aside className="sticky top-0 h-screen w-16 shrink-0 flex flex-col items-center justify-center gap-5 border-r border-neutral-800/50 bg-neutral-950/90 backdrop-blur-sm z-30">
            {/* Vertical guide line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-neutral-800/50 to-transparent pointer-events-none" />

            {domains.map((domain, i) => {
                const Icon = DOMAIN_ICONS[domain.id] ?? Bot
                const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
                const isActive = activeDomainId === domain.id

                return (
                    <motion.button
                        key={domain.id}
                        onClick={() => onDomainClick(domain.id)}
                        className="relative z-10 group"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        title={domain.name}
                        aria-label={domain.name}
                    >
                        {/* Icon button */}
                        <motion.div
                            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors duration-300"
                            animate={{
                                backgroundColor: isActive
                                    ? color + "25"
                                    : "transparent",
                                borderColor: isActive
                                    ? color + "55"
                                    : "#262626",
                            }}
                        >
                            <Icon
                                size={16}
                                style={{
                                    color: isActive ? color : "#525252",
                                    transition: "color 0.3s",
                                }}
                            />
                        </motion.div>

                        {/* Active indicator — right edge bar */}
                        {isActive && (
                            <motion.div
                                layoutId="chapterIndicator"
                                className="absolute -right-[17px] top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-full"
                                style={{ backgroundColor: color }}
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={{ opacity: 1, scaleY: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}

                        {/* Chapter number label */}
                        <div
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest transition-colors duration-300"
                            style={{ color: isActive ? color : "#404040" }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </div>

                        {/* Tooltip */}
                        <div className="absolute left-[52px] top-1/2 -translate-y-1/2 bg-neutral-900 border border-neutral-700/60 rounded-lg px-3 py-1.5 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                            {domain.name}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-700/60" />
                        </div>
                    </motion.button>
                )
            })}
        </aside>
    )
}
