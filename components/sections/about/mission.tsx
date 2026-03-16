"use client"

import SplitFadeText from "@/components/motion/SplitText"
import { motion, Variants } from "framer-motion"
import { Brain, Workflow, TrendingUp } from "lucide-react"

const missions = [
  {
    icon: Brain,
    title: "Innovation",
    desc: "Building intelligent AI systems that push the boundaries of automation and data-driven decision making."
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Designing scalable workflows that eliminate repetitive processes and unlock operational efficiency."
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "Delivering technology solutions that create measurable business value and long-term impact."
  }
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
}

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 16
    }
  }
}
export default function MissionSection() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 " />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Our{" "}
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Mission
          </span>
        </motion.h2>

        <SplitFadeText text="This is demo" className="text-center justify-center items-center mb-10 text-xl"/>

        {/* Mission Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true , margin: "-100px"}}
          className="grid md:grid-cols-3 gap-8"
        >
          {missions.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{
                  
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 18
                  }
                }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur "
              >
                <Icon className="w-7 h-7 text-pink-400 mb-4" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}