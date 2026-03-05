"use client"

import { motion } from "framer-motion"

export type DomainItem = {
    "id": string,
    "name": string,
    "description": string,
    "services": {
        "id": string,
        "name": string,
        "description": string,
        "use_cases": {
            "title": string,
            "problem": string,
            "solution": string,
            "impact": string
        }[]
    }[]
}

type SidebarProps = {
    domains: DomainItem[],
    activeDomain: DomainItem,
    setActiveDomain: (domain: DomainItem) => void
}

export default function Sidebar({
    domains,
    activeDomain,
    setActiveDomain
}: SidebarProps) {
    return (
        <div className="w-64 border-r border-neutral-800 p-6">

            <h2 className="text-lg font-semibold mb-6">
                Domains
            </h2>

            <div className="flex flex-col gap-2">

                {domains.map((domain: DomainItem) => (
                    <motion.button
                        key={domain.id}
                        onClick={() => setActiveDomain(domain)}
                        whileHover={{ x: 5 }}
                        className={`text-left px-4 py-2 rounded-lg transition
            ${activeDomain.id === domain.id
                                ? "bg-indigo-600"
                                : "hover:bg-neutral-800"
                            }`}
                    >
                        {domain.name}
                    </motion.button>
                ))}

            </div>
        </div>
    )
}