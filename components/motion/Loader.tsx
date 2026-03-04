// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useEffect, useState } from "react"
// import VIVA from "../ui/VIVA"

// export default function IntroOverlay() {
//     const [phase, setPhase] = useState<"center" | "move" | "done">("center")

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setPhase("move")
//         }, 1200)

//         return () => clearTimeout(timer)
//     }, [])

//     return (
//         <AnimatePresence>
//             {phase !== "done" && (
//                 <>
//                     {/* 🔹 Overlay (separate) */}
//                     <motion.div
//                         initial={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 1.2 }}
//                         className="fixed inset-0 z-40 bg-black/70"
//                     />

//                     {/* 🔹 VIVA block */}
//                     <motion.div
//                         initial={{
//                             top: "50%",
//                             left: "50%",
//                             x: "-50%",
//                             y: "-50%",
//                             position: "fixed",
//                         }}
//                         animate={
//                             phase === "move"
//                                 ? {
//                                     top: "1rem",
//                                     left: "1rem",
//                                     x: 0,
//                                     y: -7,
//                                 }
//                                 : {}
//                         }
//                         transition={{ duration: 0.8, ease: "easeInOut" }}
//                         className="z-50"
//                         onAnimationComplete={() => {
//                             if (phase === "move") {
//                                 setPhase("done")
//                             }
//                         }}
//                     >
//                         <VIVA />
//                     </motion.div>
//                 </>
//             )}
//         </AnimatePresence>
//     )
// }