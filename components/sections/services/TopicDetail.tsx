

  //  {/* Use case cards VAR1 */}

// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { UseCase } from "@/types/services"

// interface TopicDetailProps {
//   domain: UseCase
//   accentColor: string
// }

// const TopicDetail = ({ domain, accentColor }: TopicDetailProps) => {

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{ opacity: 0, y: 20, scale: 0.97 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: -20, scale: 0.97 }}
//         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//         className="rounded-2xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,7%)] p-6 md:p-10 shadow-lg max-h-[80vh] flex flex-col overflow-y-auto"
//       >

//         <div className="space-y-5">

//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="group rounded-xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,9%)] p-6 md:p-7 relative overflow-hidden"
//           >

//             {/* hover glow */}
// <div
//   className="
//   absolute inset-0 
//   opacity-0 group-hover:opacity-50 
//   transition-opacity duration-500 
//   pointer-events-none
//   bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]
// "
// />

//             <div className="relative z-10 space-y-5">

//               {/* title */}
//               <h4 className="font-bold text-white text-lg md:text-xl">
//                 {domain.title}
//               </h4>

//               {/* Problem → Solution → Impact */}
// <div className="flex flex-col md:flex-row items-stretch gap-2 text-base md:text-lg">
//                 {/* Problem */}
//                 <div className="flex-1 flex flex-col items-center text-center p-4">

//                   <div
//                     className="w-3 h-3 rounded-full border-2 mb-3"
//                     style={{
//                       backgroundColor: accentColor,
//                       borderColor: accentColor + "40"
//                     }}
//                   />

//                   <span
//                     className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
//                     style={{
//                       backgroundColor: accentColor + "15",
//                       color: accentColor 
//                     }}
//                   >
//                     Problem
//                   </span>

//                   <p className="text-white/90 leading-relaxed">
//                     {domain.problem}
//                   </p>

//                 </div>

//                 {/* connector */}
//                 <div className="hidden md:flex items-center">
//                   <div
//                     className="w-10 h-[2px]"
//                     style={{
//                       background: `linear-gradient(to right, ${accentColor}80, transparent)`
//                     }}
//                   />
//                 </div>

//                 {/* Solution */}
//                 <div className="flex-1 flex flex-col items-center text-center p-4">

//                   <div
//                     className="w-3 h-3 rounded-full border-2 mb-3"
//                     style={{
//                       backgroundColor: accentColor,
//                       borderColor: accentColor + "40"
//                     }}
//                   />

//                   <span
//                     className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
//                     style={{
//                       backgroundColor: accentColor + "15",
//                       color: accentColor
//                     }}
//                   >
//                     Solution
//                   </span>

//                   <p className="text-white/90 leading-relaxed">
//                     {domain.solution}
//                   </p>

//                 </div>

//                 {/* connector */}
//                 <div className="hidden md:flex items-center">
//                   <div
//                     className="w-10 h-[2px]"
//                     style={{
//                       background: `linear-gradient(to right, ${accentColor}80, transparent)`
//                     }}
//                   />
//                 </div>

//                 {/* Impact */}
//                 <div className="flex-1 flex flex-col items-center text-center p-4">

//                   <div
//                     className="w-3 h-3 rounded-full border-2 mb-3"
//                     style={{
//                       backgroundColor: accentColor,
//                       borderColor: accentColor + "40"
//                     }}
//                   />

//                   <span
//                     className="px-3 py-1 rounded-full font-semibold text-s uppercase tracking-wider mb-2"
//                     style={{
//                       backgroundColor: accentColor + "15",
//                       color: accentColor
//                     }}
//                   >
//                     Impact
//                   </span>

//                   <p className="text-white/90 leading-relaxed">
//                     {domain.impact}
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default TopicDetail



// {/* Use case cards VAR2 */}
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { UseCase } from "@/types/services"
import { CometCard } from "@/components/ui/comet-card"

interface TopicDetailProps {
  domain: UseCase
  accentColor: string
}

// Deterministic pattern picker based on title
const getPatternIndex = (title: string) => {
  let hash = 0
  for (let i = 0; i < title.length; i++) hash = title.charCodeAt(i) + ((hash << 5) - hash)
  return Math.abs(hash) % 5
}
const TechPattern = ({ accentColor, seed }: { accentColor: string; seed: number }) => {
  // scanlines for #E60000 domains, dots for #9C2AA0 domains
  const isScanlines = accentColor === "#E60000"

  if (isScanlines) return (
    <svg key="scanlines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`scan-${seed}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40 L40 0" stroke={accentColor} strokeWidth="0.75" strokeOpacity="0.2"/>
          <path d="M-10 40 L30 0" stroke={accentColor} strokeWidth="0.4" strokeOpacity="0.1"/>
          <path d="M10 40 L50 0" stroke={accentColor} strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#scan-${seed})`}/>
      <rect x="10%" y="20%" width="18%" height="2" rx="1" fill={accentColor} fillOpacity="0.15"/>
      <rect x="60%" y="60%" width="25%" height="2" rx="1" fill={accentColor} fillOpacity="0.1"/>
      <rect x="30%" y="75%" width="12%" height="2" rx="1" fill={accentColor} fillOpacity="0.12"/>
    </svg>
  )

  return (
    <svg key="dots" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`dots-${seed}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.5" fill={accentColor} fillOpacity="0.35"/>
          <circle cx="0" cy="0" r="1" fill={accentColor} fillOpacity="0.15"/>
          <circle cx="24" cy="0" r="1" fill={accentColor} fillOpacity="0.15"/>
          <circle cx="0" cy="24" r="1" fill={accentColor} fillOpacity="0.15"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${seed})`}/>
    </svg>
  )
}

const TopicDetail = ({ domain, accentColor }: TopicDetailProps) => {
  const sections = [
    { label: "Problem", text: domain.problem },
    { label: "Solution", text: domain.solution },
    { label: "Impact", text: domain.impact },
  ]

  const patternSeed = getPatternIndex(domain.title)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <CometCard rotateDepth={4} translateDepth={6} className="h-full">
          <div className="group rounded-2xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,9%)] relative overflow-hidden flex flex-col h-full">

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${accentColor}59, transparent 40%),
                             radial-gradient(circle at 80% 80%, ${accentColor}40, transparent 40%),
                             linear-gradient(135deg, #0f0f14 0%, #151521 40%, #1a1a2a 100%)`,
              }}
            />

            {/* Banner with tech pattern */}
            {/* <div className="relative w-full h-32 overflow-hidden shrink-0">

              {/* Dark base
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, #0a0a0f 0%, #111118 100%)` }}
              />

              /* Accent glow blob
              <div
                className="absolute -top-6 -left-6 w-48 h-48 rounded-full blur-3xl opacity-30"
                style={{ background: accentColor }}
              />
              <div
                className="absolute -bottom-6 right-10 w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{ background: accentColor }}
              />

              /* SVG pattern
              <div className="absolute inset-0">
                <TechPattern accentColor={accentColor} seed={patternSeed} />
              </div>

              {/* Fade into card bg at bottom 
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 30%, hsl(0,0%,9%) 100%)`,
                }}
              />

            </div>
             */}

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-5 px-6 pb-8 mt-2">

              {/* Title */}
              <h4 className="font-bold text-white text-1xl md:text-2xl" >
                {domain.title}
              </h4>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: `linear-gradient(to right, ${accentColor}60, transparent)` }}
              />

              {/* Problem → Solution → Impact */}
              <div className="flex flex-col gap-5">
                {sections.map(({ label, text }, i) => (
                  <div key={label} className="flex flex-col gap-2">

                    <div className="flex items-center gap-2">
                      {/* <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: accentColor }}
                      /> */}
                      <span
                        className="px-2.5 py-0.5 rounded-full font-semibold text-md uppercase tracking-wider"
                        style={{ backgroundColor: accentColor + "15", color: accentColor }}
                      >
                        {label}
                      </span>
                    </div>

                    <p className="text-white leading-relaxed text-sm md:text-base pl-4">
                      {text}
                    </p>

                    {i < sections.length - 1 && (
                      <div
                        className="ml-1 mt-1 w-px h-4 self-start"
                        style={{ background: `linear-gradient(to bottom, ${accentColor}60, transparent)` }}
                      />
                    )}

                  </div>
                ))}
              </div>

            </div>
          </div>
        </CometCard>
      </motion.div>
    </AnimatePresence>
  )
}

export default TopicDetail