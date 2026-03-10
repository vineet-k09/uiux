// "use client"

// import { motion } from "framer-motion"
// import { Domain } from "@/types/services"

// export const DOMAIN_COLORS: Record<string, string> = {
//     "customer-care": "#6366f1",
//     "data-analytics": "#10b981",
//     "cloud-services": "#0ea5e9",
//     "cyber-security": "#f43f5e",
//     "ai-automation": "#8b5cf6",
// }

// interface ChapterNavProps {
//     domains: Domain[]
//     activeDomainId: string
//     onDomainClick: (id: string) => void
// }

// export default function ChapterNav({
//     domains,
//     activeDomainId,
//     onDomainClick,
// }: ChapterNavProps) {
//     return (
//         <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col items-start justify-center gap-6 px-8 border-r border-neutral-800/60 bg-neutral-950/95 backdrop-blur-sm z-30">

//             {/* vertical guide line */}
//             <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-linear-to-b from-transparent via-neutral-800/50 to-transparent pointer-events-none" />

//             {domains.map((domain) => {
//                 const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
//                 const isActive = activeDomainId === domain.id

//                 return (
//                     <motion.button
//                         key={domain.id}
//                         onClick={() => onDomainClick(domain.id)}
//                         className="relative z-10 group"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <motion.div
//                             className="px-5 py-3 rounded-xl text-base font-medium border w-full text-left"
//                             animate={{
//                                 backgroundColor: isActive ? `${color}20` : "transparent",
//                                 borderColor: isActive ? `${color}60` : "#262626",
//                                 color: isActive ? "#ffffff" : "#a3a3a3",
//                             }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             {domain.name}
//                         </motion.div>

//                         {isActive && (
//                             <motion.div
//                                 layoutId="chapterIndicator"
//                                 className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full"
//                                 style={{ backgroundColor: color }}
//                                 transition={{ type: "spring", stiffness: 320, damping: 30 }}
//                             />
//                         )}
//                     </motion.button>
//                 )
//             })}
//         </aside>
//     )
// }

// "use client"

// import { motion } from "framer-motion"
// import { Domain } from "@/types/services"

// export const DOMAIN_COLORS: Record<string, string> = {
//     "customer-care": "#6366f1",
//     "data-analytics": "#10b981",
//     "cloud-services": "#0ea5e9",
//     "cyber-security": "#f43f5e",
//     "ai-automation": "#8b5cf6",
// }

// interface ChapterNavProps {
//     domains: Domain[]
//     activeDomainId: string
//     onDomainClick: (id: string) => void
// }

// export default function ChapterNav({
//     domains,
//     activeDomainId,
//     onDomainClick,
// }: ChapterNavProps) {
//     return (
//         <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col items-start justify-center gap-6 px-8 border-r border-white/10 bg-brand backdrop-blur-sm z-30">

//             {/* vertical guide line */}
//             <div />

//             {domains.map((domain) => {
//                 const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
//                 const isActive = activeDomainId === domain.id

//                 return (
//                     <motion.button
//                         key={domain.id}
//                         onClick={() => onDomainClick(domain.id)}
//                         className="relative z-10 group"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <motion.div
//                             className="px-5 py-3 rounded-xl text-body font-medium border w-full text-left surface"
//                             animate={{
//                                 backgroundColor: isActive ? `${color}20` : "transparent",
//                                 borderColor: isActive ? `${color}60` : "rgba(255,255,255,0.08)",
//                                 color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
//                             }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             {domain.name}
//                         </motion.div>

//                         {isActive && (
//                             <motion.div
//                                 layoutId="chapterIndicator"
//                                 className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full"
//                                 style={{ backgroundColor: color }}
//                                 transition={{ type: "spring", stiffness: 320, damping: 30 }}
//                             />
//                         )}
//                     </motion.button>
//                 )
//             })}
//         </aside>
//     )
// }

"use client"

import { motion } from "framer-motion"
import { Domain } from "@/types/services"

export const DOMAIN_COLORS: Record<string, string> = {
    "customer-care": "#E60000",
    "data-analytics": "#9C2AA0",
    "cloud-services": "#E60000",
    "cyber-security": "#9C2AA0",
    "ai-automation": "#E60000",
}

interface ChapterNavProps {
    domains: Domain[]
    activeDomainId: string
    onDomainClick: (id: string) => void
}

export default function ChapterNav({
    domains,
    activeDomainId,
    onDomainClick,
}: ChapterNavProps) {
    return (
        <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col items-start justify-center gap-6 px-8 border-r border-neutral-800/60 bg-neutral-950/95 backdrop-blur-sm z-30">

            {/* vertical guide line */}
            <div  />

            {domains.map((domain) => {
                const color = DOMAIN_COLORS[domain.id] ?? "#6366f1"
                const isActive = activeDomainId === domain.id

                return (
                    <motion.button
                        key={domain.id}
                        onClick={() => onDomainClick(domain.id)}
                        className="relative z-10 group w-full"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <motion.div
                            className="px-5 py-3 rounded-xl text-body font-medium border w-full text-left surface transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
                            animate={{
                                backgroundColor: isActive ? `${color}18` : "transparent",
                                borderColor: isActive ? `${color}55` : "rgba(255,255,255,0.08)",
                                color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                            }}
                            transition={{ duration: 0.25 }}
                        >
                            {domain.name}
                        </motion.div>

                        {isActive && (
                            <motion.div
                                layoutId="chapterIndicator"
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-full shadow-lg"
                                style={{
                                    backgroundColor: color,
                                    boxShadow: `0 0 14px ${color}`,
                                }}
                                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            />
                        )}
                    </motion.button>
                )
            })}
        </aside>
    )
}