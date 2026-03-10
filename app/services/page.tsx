"use client"

import domainsData from "@/data/services.json"
import { useState, useRef, useEffect, useCallback } from "react"
import ChapterNav from "./componenets/ChapterNav"
import DomainSection from "./componenets/DomainSection"
import { Domain } from "@/types/services"

const domains = domainsData.domains as Domain[]

export default function Services() {
    const [activeDomainId, setActiveDomainId] = useState(domains[0].id)
    const sectionRefs = useRef<(HTMLElement | null)[]>([])


    useEffect(() => {
        const elements = sectionRefs.current.filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveDomainId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        )

        elements.forEach((el) => observer.observe(el!))

        return () => observer.disconnect()
    }, [])

    const scrollToDomain = useCallback((id: string) => {
        setActiveDomainId(id)

        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    return (
        <div className="text-white min-h-screen flex" suppressHydrationWarning>

            <ChapterNav
                domains={domains}
                activeDomainId={activeDomainId}
                onDomainClick={scrollToDomain}
            />


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
