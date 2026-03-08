```ts
"use client"

import domains from "@/data/services.json";
import { useState } from "react";
import Sidebar from "./componenets/domain-sidebar";
import ServiceCanvas from "./componenets/service-canvas";
import ServicePanel from "./componenets/service-panel";
import UseCasePanel from "./componenets/usecase-panel";
import ExpandingGrid from "./componenets/expanding-controller";
import type { UseCase } from "./componenets/usecase-panel";

export default function Services() {
    const [activeDomain, setActiveDomain] = useState(domains.domains[0])
    const [activeUseCase, setActiveUseCase] = useState<UseCase>(domains.domains[0].services[0].use_cases[0]);
    return (
        <div className="bg-neutral-950 text-white">
            
            {/* <section className="section bg-brand">
                <div className="container-main">
                    <h1 className="text-gradient">
                        AI Powered Customer Support
                    </h1>
                    <h2 className="mt-8">
                        Intelligent Service Automation
                    </h2>
                    <p className="mt-4 max-w-xl">
                        AI driven systems automate support interactions,
                        reduce waiting time and improve customer experience
                        with intelligent routing and voice automation.
                    </p>
                    <div className="surface-card mt-10">
                        Service Card Example
                    </div>
                </div>
            </section> */}

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
            
            <section className="flex h-full">

                <Sidebar
                    domains={domains.domains}
                    activeDomain={activeDomain}
                    setActiveDomain={setActiveDomain}
                />

                <div className="flex-1 overflow-y-auto p-8">

                    <ExpandingGrid
                        services={activeDomain.services}
                        setActiveUseCase={setActiveUseCase}
                    />

                </div>


            </section>

        </div>
    )
}
```