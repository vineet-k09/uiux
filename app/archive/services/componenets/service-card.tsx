"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface UseCase {
    title: string
    problem: string
    solution: string
    impact: string
}


interface Service {
    name: string
    description: string
    useCases: Array<UseCase>
}

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            layout
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 cursor-pointer hover:bg-linear-to-br hover:from-indigo-600/20 hover:to-purple-600/20"
        >

            <h3 className="text-xl font-semibold">
                {service.name}
            </h3>

            <p className="text-neutral-400 mt-2 text-sm">
                {service.description}
            </p>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                    hovered
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                }
                className="overflow-hidden mt-4"
            >
                <h4 className="text-sm text-indigo-400 mb-2">
                    Use Cases
                </h4>

                <ul className="space-y-2 text-sm text-neutral-300">
                    {service.useCases.map((u: UseCase, i: number) => (
                        <li key={i}>
                            • {u.title}
                        </li>
                    ))}
                </ul>
            </motion.div>

        </motion.div>
    )
}