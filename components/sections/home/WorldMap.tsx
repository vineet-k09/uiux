import { useRef } from "react";
import { motion, useInView } from "motion/react";
import WorldMap from "@/components/ui/world-map";
import CounterCard from "./CounterCard";

const connectionDots = [
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
    { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
    { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 35.6762, lng: 139.6503 } },
];

const stats = [
    { endValue: 24, suffix: "/7", label: "Global coverage" },
    { endValue: 142, suffix: "", label: "Countries active" },
    { endValue: 980, suffix: "+", label: "Active nodes" },
    { endValue: 3200, suffix: "+", label: "Tasks completed" },
    { endValue: 12000, suffix: "+", label: "Connections" },
    { endValue: 99, suffix: "%", label: "Uptime guaranteed" },
];

export default function WorldMapCard() {
    const mapRef = useRef(null);
    const isMapInView = useInView(mapRef, { once: true });

    return (
        <div className="min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-16 py-6">
            <div
                ref={mapRef}
                className="w-full rounded-xl border border-[#262626] bg-[#121212] overflow-hidden"
            >
                <WorldMap dots={isMapInView ? connectionDots : []} />
            </div>

            <div className="relative w-full rounded-xl border border-[#262626] mt-4 flex flex-row overflow-x-auto">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]" />
                <div className="relative z-10 flex flex-row w-full">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-row flex-1 min-w-0">
                            <CounterCard
                                endValue={stat.endValue}
                                suffix={stat.suffix}
                                label={stat.label}
                                delay={0.8}
                            />
                            {i < stats.length - 1 && (
                                <div className="w-px bg-[#262626] self-stretch my-3" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}