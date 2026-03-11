'use client'

import { motion, Variants } from "framer-motion"
import Link from "next/link"

export default function HeroContent() {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18
      }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="flex items-center justify-center min-h-screen">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-5xl px-6"
      >

        {/* Pill */}
        <motion.div variants={item}>
          <span className="inline-block px-5 py-2 text-sm font-medium tracking-wide text-white/80 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
            AI & DATA SERVICE TOWER
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"
        >
          Powering Vivafone's <br />
          Intelligent Future
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
        >
          A centralized global AI and Data capability bringing over 2000+
          professionals to deliver scalable, secure and responsible AI
          solutions across Vivafone
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex justify-center gap-6 mt-10"
        >
<Link href={'/services'}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-purple-500/30"
          >
          
            Our Services
          </motion.button>

          </Link>
        </motion.div>

      </motion.div>

    </section>
  )
}
