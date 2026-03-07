"use client"

import { useState } from "react"
import ExpandingCard from "./exapnding-cards"
import type { UseCase } from "./usecase-panel"

interface Service {
    name: string
    description: string
    use_cases: UseCase[]
}

interface Props {
    services: Service[]
    setActiveUseCase: (useCase: UseCase) => void
}

export default function ExpandingGrid({
    services,
    setActiveUseCase
}: Props) {

    const [expanded, setExpanded] = useState<number | null>(null)

    return (

        <div className="grid grid-cols-3 gap-6">

            {services.map((service, i) => (

                <ExpandingCard
                    key={i}
                    service={service}
                    expanded={expanded === i}
                    setActiveUseCase={setActiveUseCase}
                    onClick={() =>
                        setExpanded(expanded === i ? null : i)
                    }
                />

            ))}

        </div>

    )
}