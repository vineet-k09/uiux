"use client"

import domainsData from "@/data/services.json"
import { useState, useRef, useEffect, useCallback } from "react"
import ChapterNav from "./componenets/chapter-nav"
import DomainSection from "./componenets/domain-section"
import type { DomainItem } from "../services/componenets/domain-sidebar"

const domains = domainsData.domains as DomainItem[]

export default function Services() {
    const [activeDomainId, setActiveDomainId] = useState(domains[0].id)
    const sectionRefs = useRef<(HTMLElement | null)[]>([])

    // Track which domain section is currently in view
    useEffect(() => {
        const observers = domains.map((domain, i) => {
            const el = sectionRefs.current[i]
            if (!el) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveDomainId(domain.id)
                    }
                },
                {
                    threshold: 0.15,
                    rootMargin: "-15% 0px -70% 0px",
                }
            )
            observer.observe(el)
            return observer
        })

        return () => {
            observers.forEach((obs) => obs?.disconnect())
        }
    }, [])

    const scrollToDomain = useCallback((id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    return (
        <div className="bg-neutral-950 text-white min-h-screen flex" suppressHydrationWarning>
            {/* Sticky chapter navigator */}
            <ChapterNav
                domains={domains}
                activeDomainId={activeDomainId}
                onDomainClick={scrollToDomain}
            />

            {/* Scrollable story content */}
            <main className="flex-1 min-w-0">
                {domains.map((domain, i) => (
                    <DomainSection
                        key={domain.id}
                        domain={domain}
                        index={i}
                        ref={(el: HTMLElement | null) => {
                            sectionRefs.current[i] = el
                        }}
                    />
                ))}
            </main>
        </div>
    )
}
