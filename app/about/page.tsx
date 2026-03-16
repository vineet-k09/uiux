"use client"

import Image from "next/image"
import { motion, spring } from "framer-motion"
import { Rocket, Cpu, Database, Sparkles } from "lucide-react"
import SplitFadeText from "@/components/motion/SplitText"
import ValueProposition from "@/components/sections/home/Value"
import MissionSection from "@/components/sections/about/mission"
import HowWeWork from "@/components/sections/about/howwework"





const capabilities = [
  "AI Solutions",
  "Automation Systems",
  "Data Engineering",
  "Cloud Pipelines",
  "Workflow Optimization",
]

const stats = [
  { icon: Rocket, value: "50+", label: "Projects" },
  { icon: Cpu, value: "10+", label: "Technologies" },
  { icon: Database, value: "5+", label: "Domains" },
  { icon: Sparkles, value: "AI", label: "Driven" },
]

export default function AboutSection() {

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      
    }
  }
}

const card = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 40
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      type: spring,
      stiffness: 200,
      damping: 18
    }
  }
}

  return (
    <section className="relative py-32 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea20,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-center mb-20 tracking-tight"
        >
          About{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Us
          </span>
        </motion.h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full h-105"
          >
            <Image
              src="/About.jpg"
              alt="AI automation"
              fill
              className="object-contain rounded"
            />
          </motion.div>

          {/* Content */}
          <div>
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0}}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font- text-justify mb-20 tracking-tight"
        >
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              We design and build intelligent systems that leverage{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
                artificial intelligence
              </span>{" "}
              and automation to solve complex business problems. Our solutions
              streamline workflows, unlock insights, and empower organizations
              to operate smarter.
            </p>
         </motion.div> 
            {/* capability pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {capabilities.map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full border border-white/20 backdrop-blur text-sm text-gray-200"
                >
                  <SplitFadeText text={item} />
                </motion.span>
              ))}
            </div>

            {/* divider */}
            <div className="h-px w-32 bg-linear-to-r from-pink-500 to-purple-500 my-10" />
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
              
                {stats.map((s, i) => {
                const Icon = s.icon

                return (
                  <motion.div
                    key={i}
                    variants={card}
                    whileHover={{ y: -6 }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                  >
                    <Icon className="w-5 h-5 text-pink-400 mb-2" />

                    <p className="text-xl font-semibold text-white">
                      {s.value}
                    </p>

                    <p className="text-sm text-gray-400">
                      {s.label}
                    </p>
                  </motion.div>
                )
              })}

            </motion.div>
          </div>
        </div>
            
      </div>
      <MissionSection />
      <HowWeWork />
      <ValueProposition />

    </section>
    
  )
}