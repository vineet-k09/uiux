
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
    "data-analytics": "#9C2AA0",
    "cloud-services": "#E60000",
    "cyber-security": "#9C2AA0",
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
            "#E60000": "#9C2AA0",
            "#9C2AA0": "#E60000",
        }

        const oppositeColor = OPPOSITE_COLORS[color] ?? "#9C2AA0"

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
`
                    }}
                />
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
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

                    <div className="flex flex-col  gap-5">

                        <div>
                            <h2 className="text-5xl lg:text-superh1 xl:text-6xl font-bold leading-[1.05] tracking-tight mb-3">
                                {domain.name}
                            </h2>

                            <p className="text-h2 leading-relaxed max-w-2xl ">
                                {domain.description}
                            </p>
                        </div>

                    </div>

                </motion.div>

                {/* Divider */}
                <div className="relative z-10 h-px bg-white/30 mb-12" />
                {/* ── Services ── */}
                <div className="relative z-10 space-y-16">
                    {domain.services.map((service, i) => (
                        <ServiceBlock
                            key={service.id}
                            service={service}
                            accentColor={color}
                            serviceIndex={i}
                            id={service.id}
                        />
                    ))}
                </div>
            </section>
        )
    }
)

DomainSection.displayName = "DomainSection"
export default DomainSection