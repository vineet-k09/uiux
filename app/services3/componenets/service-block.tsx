"use client"

import { motion } from "framer-motion"
import UseCaseCardNew from "./usecase-card-new"
import type { DomainItem } from "../../services/componenets/domain-sidebar"

type Service = DomainItem["services"][number]

interface ServiceBlockProps {
    service: Service
    accentColor: string
    serviceIndex: number
}

export default function ServiceBlock({
    service,
    accentColor,
    serviceIndex,
}: ServiceBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: serviceIndex * 0.07 }}
        >
            {/* Service header */}
            <div className="flex items-stretch gap-4 mb-5">
                {/* Left accent bar */}
                <div
                    className="w-[3px] rounded-full shrink-0"
                    style={{ backgroundColor: accentColor + "70" }}
                />
                <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                        {service.name}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Use case cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 pl-4">
                {service.use_cases.map((useCase, i) => (
                    <UseCaseCardNew
                        key={useCase.title + i}
                        useCase={useCase}
                        accentColor={accentColor}
                        index={i}
                    />
                ))}
            </div>
        </motion.div>
    )
}
