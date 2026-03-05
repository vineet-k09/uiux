"use client"

import { motion, AnimatePresence } from "framer-motion"

export interface UseCase {
    title: string
    problem: string
    solution: string
    impact: string
}

export default function UseCasePanel({ useCase }: { useCase: UseCase }) {

    return (
        <div className="flex-1 p-10">

            <AnimatePresence mode="wait">

                {useCase && (
                    <motion.div
                        key={useCase.title}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-xl space-y-6"
                    >

                        <h2 className="text-3xl font-bold">
                            {useCase.title}
                        </h2>

                        <div>
                            <h3 className="text-indigo-400 text-sm">
                                Problem
                            </h3>
                            <p className="text-neutral-300">
                                {useCase.problem}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-indigo-400 text-sm">
                                Solution
                            </h3>
                            <p className="text-neutral-300">
                                {useCase.solution}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-indigo-400 text-sm">
                                Impact
                            </h3>
                            <p className="text-neutral-300">
                                {useCase.impact}
                            </p>
                        </div>

                    </motion.div>
                )}

            </AnimatePresence>

        </div>
    )
}