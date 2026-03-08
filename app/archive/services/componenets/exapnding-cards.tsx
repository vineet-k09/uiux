"use client"

import { motion } from "framer-motion"
import type { UseCase } from "./usecase-panel"

interface Service {
    name: string
    description: string
    use_cases: UseCase[]
}

interface Props {
    service: Service
    expanded: boolean
    onClick: () => void
    setActiveUseCase: (useCase: UseCase) => void
}

export default function ExpandingCard({
    service,
    expanded,
    onClick,
    setActiveUseCase
}: Props) {

    return (
        <motion.div
            layout
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            onClick={onClick}
            className={`cursor-pointer border border-neutral-800 rounded-2xl p-6
            bg-neutral-900 hover:bg-linear-to-br hover:from-indigo-600/20 hover:to-purple-600/20
            ${expanded ? "col-span-full" : ""}`}
        >

                <motion.div
        key={expanded ? "expanded" : "collapsed"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2}}
    >
        <h3 className="text-xl font-semibold">
            {service.name}
        </h3>

        <p className="text-neutral-400 mt-2 text-sm">
            {service.description}
        </p>
    </motion.div>

            {expanded && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 space-y-6"
                >

                    <h4 className="text-indigo-400 text-sm">
                        Use Cases
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4">

                        {service.use_cases.map((u, i) => (

                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveUseCase(u)
                                }}
                                className="border border-neutral-800 rounded-lg p-4 bg-neutral-950 text-left hover:bg-neutral-900"
                            >

                                <h5 className="font-medium text-neutral-100 mb-2">
                                    {u.title}
                                </h5>

                                <div>
                                    <h3 className="text-indigo-400 text-sm">
                                        Problem
                                    </h3>
                                    <p className="text-neutral-300">
                                        {u.problem}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-indigo-400 text-sm">
                                        Solution
                                    </h3>
                                    <p className="text-neutral-300">
                                        {u.solution}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-indigo-400 text-sm">
                                        Impact
                                    </h3>
                                    <p className="text-neutral-300">
                                        {u.impact}
                                    </p>
                                </div>

                            </button>

                        ))}

                    </div>

                </motion.div>

            )}

        </motion.div>
    )
}