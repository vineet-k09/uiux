"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import domainsData from "@/data/services.json";
import { Domain } from "@/types/services";
import ChapterNav from "@/components/sections/services/ChapterNav";
import DomainSection from "@/components/sections/services/DomainSection";

const domains = domainsData.domains as Domain[];

export default function Services() {
  const [activeDomainId, setActiveDomainId] = useState(domains[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = sectionRefs.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDomainId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  const scrollToDomain = useCallback((id: string) => {
    setActiveDomainId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant" });
  }, []);
  const scrollToService = useCallback((domainId: string, serviceId: string) => {
    setActiveDomainId(domainId);
    const el = document.getElementById(serviceId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "instant" });
    }
  }, []);

  return (
    <div className="text-white min-h-screen flex" suppressHydrationWarning>
      <ChapterNav
        domains={domains}
        activeDomainId={activeDomainId}
        onDomainClick={scrollToDomain}
        onServiceClick={scrollToService}
      />
      <main className="flex-1 min-w-0">
        {domains.map((domain, i) => (
          <DomainSection
            key={domain.id}
            domain={domain}
            index={i}
            ref={(el: HTMLElement | null) => {
              sectionRefs.current[i] = el;
            }}
          />
        ))}
      </main>
    </div>
  );
}
// "use client"
// import { useState, useRef, useEffect, useCallback } from "react"
// import domainsData from "@/data/services.json"
// import { Domain } from "@/types/services"
// import ChapterNav from "@/components/sections/services/ChapterNav"
// import DomainSection from "@/components/sections/services/DomainSection"

// const domains = domainsData.domains as Domain[]

// export default function Services() {
//   const [activeDomainId, setActiveDomainId] = useState(domains[0].id)
//   const sectionRefs = useRef<(HTMLElement | null)[]>([])
//   const isScrollingRef = useRef(false)

//   useEffect(() => {
//     const elements = sectionRefs.current.filter(Boolean)
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (isScrollingRef.current) return
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveDomainId(entry.target.id)
//           }
//         })
//       },
//       {
//         rootMargin: "-40% 0px -40% 0px",
//         threshold: 0,
//       }
//     )
//     elements.forEach((el) => observer.observe(el!))
//     return () => observer.disconnect()
//   }, [])

//   const scrollToDomain = useCallback((id: string) => {
//     setActiveDomainId(id)
//     isScrollingRef.current = true
//     setTimeout(() => {
//       const el = document.getElementById(id)
//       if (el) {
//         const top = el.getBoundingClientRect().top + window.scrollY
//         window.scrollTo({ top, behavior: "smooth" })
//       }
//     }, 50)
//     setTimeout(() => {
//       isScrollingRef.current = false
//     }, 1000)
//   }, [])

//   // ← this was missing
//   const scrollToService = useCallback((domainId: string, serviceId: string) => {
//   setActiveDomainId(domainId)
//   isScrollingRef.current = true
//   setTimeout(() => {
//     const el = document.getElementById(serviceId)
//     if (el) {
//       const top = el.getBoundingClientRect().top + window.scrollY - 120 // ← adjust this value
//       window.scrollTo({ top, behavior: "smooth" })
//     }
//   }, 50)
//   setTimeout(() => {
//     isScrollingRef.current = false
//   }, 1000)
// }, [])

//   return (
//     <div className="text-white min-h-screen flex" suppressHydrationWarning>
//       <ChapterNav
//         domains={domains}
//         activeDomainId={activeDomainId}
//         onDomainClick={scrollToDomain}
//         onServiceClick={scrollToService}
//       />
//       <main className="flex-1 min-w-0">
//         {domains.map((domain, i) => (
//           <DomainSection
//             key={domain.id}
//             domain={domain}
//             index={i}
//             ref={(el: HTMLElement | null) => {
//               sectionRefs.current[i] = el
//             }}
//           />

//         ))}

//       </main>

//     </div>
//   )
// }

// "use client"
// import { useState, useRef, useEffect, useCallback } from "react"
// import domainsData from "@/data/services.json"
// import { Domain } from "@/types/services"
// import ChapterNav from "@/components/sections/services/ChapterNav"
// import DomainSection from "@/components/sections/services/DomainSection"

// const domains = domainsData.domains as Domain[]

// export default function Services() {
//   const [activeDomainId, setActiveDomainId] = useState(domains[0].id)
//   const sectionRefs = useRef<(HTMLElement | null)[]>([])

//   useEffect(() => {
//     const elements = sectionRefs.current.filter(Boolean)
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveDomainId(entry.target.id)
//           }
//         })
//       },
//       { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
//     )
//     elements.forEach((el) => observer.observe(el!))
//     return () => observer.disconnect()
//   }, [])

// const scrollToDomain = useCallback((id: string) => {
//   setActiveDomainId(id)
//   const el = document.getElementById(id)
//   if (el) el.scrollIntoView({ behavior: "instant" })
// }, [])
// const scrollToService = useCallback((domainId: string, serviceId: string) => {
//   setActiveDomainId(domainId)
//   const el = document.getElementById(serviceId)
//   if (el) {
//     const top = el.getBoundingClientRect().top + window.scrollY - 120
//     window.scrollTo({ top, behavior: "instant" })
//   }
// }, [])

// return (
//     <div className="text-white min-h-screen flex" suppressHydrationWarning>
//       <ChapterNav
//         domains={domains}
//         activeDomainId={activeDomainId}
//         onDomainClick={scrollToDomain}
//         onServiceClick={scrollToService}
//       />
//       <main className="flex-1 min-w-0">
//         {domains.map((domain, i) => (
//           <DomainSection
//             key={domain.id}
//             domain={domain}
//             index={i}
//             ref={(el: HTMLElement | null) => { sectionRefs.current[i] = el }}
//           />
//         ))}
//       </main>
//     </div>
//   )
// }
