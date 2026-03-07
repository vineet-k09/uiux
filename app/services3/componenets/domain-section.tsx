"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import {
    Headphones,
    BarChart3,
    Cloud,
    Shield,
    Bot,
    type LucideIcon,
} from "lucide-react"
import type { DomainItem } from "../../services/componenets/domain-sidebar"
import ServiceBlock from "./service-block"

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

interface DomainSectionProps {
    domain: DomainItem
    index: number
}

const DomainSection = forwardRef<HTMLElement, DomainSectionProps>(
    ({ domain, index }, ref) => {
        const Icon = DOMAIN_ICONS[domain.id] ?? Bot
        const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
        const totalUseCases = domain.services.reduce(
            (acc, s) => acc + s.use_cases.length,
            0
        )

        return (
            <section
                ref={ref}
                id={domain.id}
                className="relative min-h-screen pt-24 pb-28 px-10 lg:px-20"
            >
                {/* Ambient radial glow for domain */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse 55% 35% at 15% 25%, ${color}0e, transparent 65%)`,
                    }}
                />

                {/* Top separator line with accent fade */}
                <div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{
                        background: `linear-gradient(to right, transparent 5%, ${color}55 30%, ${color}30 60%, transparent 95%)`,
                    }}
                />

                {/* ── Domain Hero ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="relative z-10 mb-14"
                >
                    {/* Chapter label */}
                    <div className="flex items-center gap-3 mb-5">
                        <span
                            className="font-mono text-[11px] tracking-[0.22em] uppercase font-medium"
                            style={{ color }}
                        >
                            Chapter {String(index + 1).padStart(2, "0")}
                        </span>
                        <div
                            className="h-px w-12 rounded-full"
                            style={{ backgroundColor: color + "55" }}
                        />
                    </div>

                    {/* Icon + Title row */}
                    <div className="flex items-start gap-5">
                        <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mt-1"
                            style={{
                                backgroundColor: color + "18",
                                border: `1px solid ${color}35`,
                            }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Icon size={26} style={{ color }} />
                        </motion.div>

                        <div className="flex-1">
                            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-3">
                                {domain.name}
                            </h2>
                            <p className="text-neutral-400 text-[15px] leading-relaxed max-w-2xl">
                                {domain.description}
                            </p>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2.5 mt-6 ml-[76px]">
                        <span
                            className="text-[11px] font-medium px-3 py-1.5 rounded-full"
                            style={{
                                color,
                                backgroundColor: color + "15",
                                border: `1px solid ${color}30`,
                            }}
                        >
                            {domain.services.length} Services
                        </span>
                        <span
                            className="text-[11px] font-medium px-3 py-1.5 rounded-full"
                            style={{
                                color,
                                backgroundColor: color + "15",
                                border: `1px solid ${color}30`,
                            }}
                        >
                            {totalUseCases} Use Cases
                        </span>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="relative z-10 h-px bg-neutral-800/50 mb-12" />

                {/* ── Services ── */}
                <div className="relative z-10 space-y-16">
                    {domain.services.map((service, i) => (
                        <ServiceBlock
                            key={service.id}
                            service={service}
                            accentColor={color}
                            serviceIndex={i}
                        />
                    ))}
                </div>
            </section>
        )
    }
)

DomainSection.displayName = "DomainSection"
export default DomainSection
