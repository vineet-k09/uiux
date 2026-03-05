"use client"

import { motion } from "framer-motion"
import { DomainItem } from "./domain-sidebar";

type SidebarProps = {
    domains: DomainItem[]
    activeDomain: DomainItem
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

            <div className="space-y-2 relative">

                {domains.map(domain => (
                    <button
                        key={domain.id}
                        onClick={() => setActiveDomain(domain)}
                        className={`relative w-full text-left px-4 py-2 rounded-lg transition
            ${activeDomain.id === domain.id
                                ? "bg-neutral-800"
                                : "hover:bg-neutral-900"}`}
                    >

                        {activeDomain.id === domain.id && (
                            <motion.div
                                layoutId="domainIndicator"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded"
                            />
                        )}

                        {domain.name}

                    </button>
                ))}

            </div>

        </div>
    )
}