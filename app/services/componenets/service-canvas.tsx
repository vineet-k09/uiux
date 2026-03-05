"use client"

import { motion, AnimatePresence } from "framer-motion"
import ServiceCard from "./service-card"

import type { DomainItem } from "./domain-sidebar";
export default function ServiceCanvas({ domain }: { domain: DomainItem }) {
    return (
        <div className="flex-1 p-10 overflow-auto">

            <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-3xl font-bold">
                    {domain.name}
                </h1>

                <p className="text-neutral-400 mt-2 max-w-xl">
                    {domain.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 "
            >

                <AnimatePresence>
                    {domain.services.map((service: DomainItem["services"][number]) => (
                        <ServiceCard key={service.id} service={{ name: service.name, description: service.description, useCases: service.use_cases }}
                         />
                    ))}
                </AnimatePresence>

            </div>

        </div>
    )
}