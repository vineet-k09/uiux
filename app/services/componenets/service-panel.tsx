"use client"

import { motion } from "framer-motion"
import { DomainItem } from "./domain-sidebar"
import { useState } from "react"

type UseCase = {
    title: string
    problem: string
    solution: string
    impact: string
}

type Props = {
    domain: DomainItem
    setActiveUseCase: (u: UseCase) => void
}

export default function ServicePanel({
    domain,
    setActiveUseCase
}: Props) {

    const [openService, setOpenService] = useState<string | null>(null)

    return (
        <div className="w-105 border-r border-neutral-800 p-8 overflow-y-auto no-scrollbar">

            <motion.div
                key={domain.id}
                initial={{ opacity: 0, 
                    // x: -20 
                }}
                animate={{ opacity: 1, 
                    // x: 0 
                }}
            >
                <h1 className="text-2xl font-bold text-gradient">
                    {domain.name}
                </h1>

                <p className="text-neutral-400 text-sm mt-2 mb-8">
                    {domain.description}
                </p>
            </motion.div>

            <div className="space-y-4">

                {domain.services.map(service => {

                    const isOpen = openService === service.id

                    return (
                        <div
                            key={service.id}
                            className="border border-neutral-800 rounded-xl hover:bg-linear-to-br hover:from-indigo-600/20 hover:to-purple-600/20"
                            onMouseEnter={() => setOpenService(service.id)}
                            onMouseLeave={() => setOpenService(null)}
                        >

                            <div className="w-full text-left p-4 flex justify-between items-center">

                                <span className="font-medium">
                                    {service.name}
                                </span>

                                <span className="text-neutral-400">
                                    {isOpen ? "-" : "+"}
                                </span>

                            </div>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: isOpen ? "auto" : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                className="overflow-hidden"
                            >

                                <div className="px-4 pb-4 text-sm text-neutral-400">

                                    <p className="mb-3">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 gap-2">

                                        {service.use_cases.map(u => (
                                            <button
                                                key={u.title}
                                                onMouseEnter={() => setActiveUseCase(u)}
                                                className="block hover:text-indigo-400 transition bg-indigo-600 text-white p-2 rounded-4xl w-full"
                                            >
                                                {u.title}
                                            </button>
                                        ))}

                                    </div>

                                </div>

                            </motion.div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}