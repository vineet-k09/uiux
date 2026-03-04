'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    { title: 'Salar de Atacama', src: 'salar_de_atacama.jpg' },
    { title: 'Valle de la luna', src: 'valle_de_la_muerte.jpeg' },
    { title: 'Miscanti Lake', src: 'miscani_lake.jpeg' },
    { title: 'Miniques Lagoons', src: 'miniques_lagoon.jpg' },
];
const cards = [
    {
        title: 'Innovation First',
        desc: 'We continuously explore new technologies to build smarter, faster, and future-ready solutions.'
    },
    {
        title: 'User-Centered Design',
        desc: 'Every product is crafted with real users in mind, ensuring intuitive experiences and lasting impact.'
    },
    {
        title: 'Scalable Solutions',
        desc: 'Our systems are designed to grow with your business, handling complexity without compromising performance.'
    },
    {
        title: 'Trust & Transparency',
        desc: 'We believe in clear communication, reliable delivery, and building long-term partnerships.'
    }
];
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef<HTMLDivElement | null>(null);
    const imageContainer = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!container.current || !imageContainer.current) return;

        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            endTrigger: container.current,   // 👈 KEY CHANGE
            end: "bottom bottom",             // 👈 stop when component ends
            pinSpacing: false,                // optional, cleaner layout
        });

        return () => ScrollTrigger.killAll();
    }, []);

    return (
        <div ref={container} className="relative text-white mt-[25vh] p-[10%]">

            {/* Description Section */}
            <div className="flex h-175 justify-between gap-[5%]">

                {/* Pinned Image */}
                <div
                    ref={imageContainer}
                    className="relative h-full w-[40%]"
                >
                    <Image
                        src="/landing_img3.png"
                        alt="project image"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="grid h-full w-[60%] grid-cols-2 grid-rows-2 gap-[3vw]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between border border-white/30 bg-white/5 p-[2vw] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/60"
                        >
                            <h3 className="text-[1.6vw] uppercase tracking-wide">
                                {card.title}
                            </h3>

                            <p className="text-[0.95vw] leading-relaxed opacity-80">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project List */}
            <div className="flex flex-col mt-50">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onMouseOver={() => setSelectedProject(index)}
                        className="uppercase text-[3vw] border-b border-white flex justify-end"
                    >
                        <h2 className="mt-10 mb-5 cursor-default">
                            {project.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}