// "use client";

// import { motion } from "framer-motion";
// import { Domain } from "@/types/services";

// export const DOMAIN_COLORS: Record<string, string> = {
//   "customer-care": "#E60000",
//   "data-analytics": "#E60000",
//   "cloud-services": "#E60000",
//   "cyber-security": "#E60000",
//   "ai-automation": "#E60000",
// };

// interface ChapterNavProps {
//   domains: Domain[];
//   activeDomainId: string;
//   onDomainClick: (id: string) => void;
// }

// export default function ChapterNav({
//   domains,
//   activeDomainId,
//   onDomainClick,
// }: ChapterNavProps) {
//   return (
//     <div
//       className="sticky w-full  
//         justify-center
//         items-end
//         flex gap-6 px-8
//         border-b 
//         border-neutral-800/60 
//         bg-black
//         h-42
//         top-0
//         backdrop-blur-sm z-30"
//     >
//       <div />
//       {domains.map((domain) => {
//         const color = DOMAIN_COLORS[domain.id] ?? "#6366f1";
//         const isActive = activeDomainId === domain.id;

//         return (
//           <motion.button
//             key={domain.id}
//             onClick={() => onDomainClick(domain.id)}
//             className="relative z-10 h-22"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <motion.div
//               className="px-4 py-3 rounded-xl text-body font-medium 
//                             border w-full transition-all 
//                             duration-300"
//               animate={{
//                 backgroundColor: isActive ? `${color}18` : "transparent",
//                 borderColor: isActive ? `${color}55` : "rgba(255,255,255,0.08)",
//                 color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
//               }}
//               transition={{ duration: 0.25 }}
//             >
//               {domain.name}
//             </motion.div>

//             {isActive && (
//               <motion.div
//                 layoutId="chapterIndicator"
//                 className="absolute left-1/2 bottom-2 -translate-x-1/2 w-30 h-1.5"
//                 style={{
//                   backgroundColor: color,
//                   boxShadow: `0 0 14px ${color}`,
//                 }}
//                 transition={{ type: "spring", stiffness: 320, damping: 28 }}
//               />
//             )}
//           </motion.button>
//         );
//       })}
//     </div>
//   );
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
        <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col items-start justify-center gap-6 px-8 border-r border-neutral-800/60 

        bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]
        backdrop-blur-sm z-30">

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