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
import { Domain } from "@/types/services"
import ServiceBlock from "./ServiceBlock"

const DOMAIN_ICONS: Record<string, LucideIcon> = {
    "customer-care": Headphones,
    "data-analytics": BarChart3,
    "cloud-services": Cloud,
    "cyber-security": Shield,
    "ai-automation": Bot,
}

export const DOMAIN_COLORS: Record<string, string> = {
    "customer-care": "#E60000",
    "data-analytics": "#E60000",
    "cloud-services": "#E60000",
    "cyber-security": "#E60000",
    "ai-automation": "#E60000",
}

interface DomainSectionProps {
    domain: Domain
    index: number
}

const DomainSection = forwardRef<HTMLElement, DomainSectionProps>(
    ({ domain, index }, ref) => {
        const Icon = DOMAIN_ICONS[domain.id] ?? Bot
        const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
        const OPPOSITE_COLORS: Record<string, string> = {
            "#E60000": "#E60000"
        }

        const oppositeColor = OPPOSITE_COLORS[color] ?? "#E60000"

        const totalUseCases = domain.services.reduce(
            (acc, s) => acc + s.use_cases.length,
            0
        )

        return (
            <section
                ref={ref}
                id={domain.id}
                className="relative h-screen pt-4 px-10 lg:px-20"
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `
                            linear-gradient(
                            180deg,
                            ${color}20 10%,
                            ${oppositeColor}25 30%,
                            transparent 75%
                            ),
                            linear-gradient(
                            180deg,
                            rgba(255,255,255,0.03) 0%,
                            rgba(0,0,0,0.25) 100%
                            )
                        `,
                    }}
                />
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[22px_22px]" />
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
                    className="relative z-10 mb-6"
                >

                    <div className="flex items-center text-left gap-5 pt-2">
                        <motion.div
                            className="w-14 h-14 -top-7.5 relative 
                            rounded-2xl flex items-center justify-center shrink-0"
                            style={{
                                backgroundColor: color + "18",
                                border: `1px solid ${color}35`,
                            }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Icon size={26} style={{ color: color }} />
                        </motion.div>
                        <div>
                            <h2 className="text-6xl lg:text-superh1 xl:text-superh1 font-bold leading-[1.05] tracking-tight mb-3">
                                {domain.name}
                            </h2>

                            <p className="text-h2 max-w-2xl mx-auto">
                                {domain.description}
                            </p>
                        </div>

                    </div>

                </motion.div>

                {/* Divider */}
                <div className="z-10 h-px bg-white/30 mb-12" />
                {/* ── Services ── */}
                <div className="relative z-10">
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
