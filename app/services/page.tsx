"use client"

import domains from "@/data/services.json";
import { useState } from "react";
import Sidebar from "./componenets/domain-sidebar";
import ServiceCanvas from "./componenets/service-canvas";
import ServicePanel from "./componenets/service-panel";
import UseCasePanel from "./componenets/usecase-panel";
import type { UseCase } from "./componenets/usecase-panel";

export default function Services() {
    const [activeDomain, setActiveDomain] = useState(domains.domains[0])
    const [activeUseCase, setActiveUseCase] = useState<UseCase>(domains.domains[0].services[0].use_cases[0]);
    return (
        <div className="bg-neutral-950 text-white">
            <section className="flex h-screen">

                <Sidebar
                    domains={domains.domains}
                    activeDomain={activeDomain}
                    setActiveDomain={setActiveDomain}
                />
                <ServiceCanvas domain={activeDomain} />
            </section>


            <section className="flex h-screen">

                <Sidebar
                    domains={domains.domains}
                    activeDomain={activeDomain}
                    setActiveDomain={setActiveDomain}
                />

                <ServicePanel
                    domain={activeDomain}
                    setActiveUseCase={(useCase) => setActiveUseCase(useCase)}
                />

                {activeUseCase && <UseCasePanel useCase={activeUseCase} />}

            </section>
        </div>
    )
}