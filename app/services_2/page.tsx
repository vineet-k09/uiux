// 'use client'

// import Lenis from "@studio-freight/lenis"
// import { useEffect, useRef } from "react"

// import Section from "./components_2/Section"
// import Timeline from "./components_2/Timeline"
// import servicesData from "@/data/services.json"
// import DomainShowcase from "./components_2/DomainShowcase";

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     const lenis = new Lenis()

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     return () => lenis.destroy()
//   }, [])

//   const sections = servicesData.domains

//   return (
//     <main className="relative">
//       {/* Hero / Landing Section */}
//       <section className="h-screen flex flex-col justify-center items-center  text-white px-8 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">Next-Gen Service Solutions</h1>
//         <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl">
//           Transform your business with intelligent services and use-case-driven solutions.
//         </p>
//         <button
//           className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
//           onClick={() => {
//             const section = document.getElementById("trial1");
//             section?.scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           Explore Services
//         </button>      </section>

//       {/* Sections + Timeline */}
//       <section id="trial1" ref={containerRef} className="relative">
//         {/* Timeline will only span this container */}
//         <Timeline target={containerRef as React.RefObject<HTMLElement>} />

//         {sections.map((domain, i) => (
//           <Section
//             key={domain.id}
//             index={i}
//             title={domain.name}
//             description={domain.description}
//             services={domain.services}
//           />
//         ))}
//       </section>
     
//     </main>
//   )
// }


import DomainShowcase from "./components_2/DomainShowcase";

export default function Page() {
  return <DomainShowcase />;
}