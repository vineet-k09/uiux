"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "@/data/projects.json";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  //   const [fade, setFade] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!container.current || !imageContainer.current) return;

    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      endTrigger: container.current,
      end: "bottom bottom",
      pinSpacing: false,
    });

    projectRefs.current.forEach((el, index) => {
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        // end: "top 30%",
        onEnter: () => setSelectedProject(index),
        onEnterBack: () => setSelectedProject(index),
      });
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div ref={container} className="relative  text-white mt-[5vh] p-[10%]">
      {/* Description Section */}
      <div className="flex h-175 justify-between gap-[5%] ">
        {/* Pinned Image */}
        <div className="w-[40%] shrink-0">
          <div
            ref={imageContainer}
            className="relative h-full w-full 
          overflow-hidden bg-black"
          >
            <Image
              key={selectedProject}
              src={`/${projects.projects[selectedProject].src}`}
              alt="project image"
              fill
              className="object-cover animate-fade"
            />
          </div>
        </div>

        <div className="grid h-full w-[60%] grid-cols-2 grid-rows-2 gap-[3vw] ">
          {projects.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full rounded-lg border border-white/30 bg-white/5 p-[2vw] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/60"
            >
              <h3 className="text-[18px] uppercase tracking-wide">
                {card.title}
              </h3>

              <p className="text-[14px] leading-relaxed opacity-80">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col mt-50">
        {projects.projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            onMouseOver={() => setSelectedProject(index)}
            className="uppercase text-[2.5vw] border-b border-white flex justify-end"
          >
            <h2
              className={`
                    mt-10 mb-10 cursor-default transition-all duration-500 ease-out
                    ${
                      selectedProject === index
                        ? "text-white scale-105 tracking-wide"
                        : "text-white/40 scale-100"
                    }
                `}
            >
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}