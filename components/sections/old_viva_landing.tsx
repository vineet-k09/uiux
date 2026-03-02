// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Home() {
//   const { scrollYProgress } = useScroll();

//   // Scroll → move text out faster as well
//   const leftX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-120%"]);
//   const rightX = useTransform(scrollYProgress, [0, 0.25], ["-40%", "120%"]);

//   return (
//     <main className="w-full">
//       {/* HERO SECTION */}
//       <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white">
        
//         {/* LEFT TEXT */}
//         <motion.div
//           initial={{ x: "-120%" }}
//           animate={{ x: "0%" }}
//           transition={{
//             duration: 0.6,   // 🔥 faster
//             ease: [0.22, 1, 0.36, 1], // smooth but snappy
//           }}
//           style={{ x: leftX }}
//           className="absolute left-10 text-8xl font-bold tracking-wide"
//         >
//           WE TAKE
//         </motion.div>

//         {/* CENTER IMAGE (BIGGER) */}
//         <div className="z-10">
//           <img
//             src="/landing_centre.png"
//             alt="Center Visual"
//             className="w-200 h-200 object-contain" // ⬅️ increased from 48 → 72
//           />
//         </div>

//         {/* RIGHT TEXT */}
//         <motion.div
//           initial={{ x: "120%" }}
//           animate={{ x: "-40%" }}
//           transition={{
//             duration: 0.6,   // 🔥 faster
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{ x: rightX }}
//           className="absolute right-10 text-8xl font-bold tracking-wide"
//         >
//           VIVA
//         </motion.div>
//       </section>

//       {/* BLANK SCROLL SECTIONS */}
//       <section className="h-screen bg-neutral-900" />
//       <section className="h-screen bg-neutral-800" />
//       <section className="h-screen bg-neutral-700" />
//     </main>
//   );
// }
