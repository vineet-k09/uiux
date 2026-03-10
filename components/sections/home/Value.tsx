"use client"

import BlockReveal from "@/components/motion/BlockReveal"
import SplitFadeText from "@/components/motion/SplitText"

import { motion } from "framer-motion"
import {
  Brain,
  Sparkles,
  LineChart,
  Zap,
  ShieldCheck,
  Rocket,
  Cpu,
  Database,
  Workflow
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cardHover = {
  whileHover: { y: -6, scale: 1.02 },
  transition: { type: "spring" as const, stiffness: 200, damping: 20 }
}

export default function ValueProposition() {
  return (
    <section className="w-full py-24 px-6 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16 space-y-4">
          
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Value Proposition
            </h2>
          

          <SplitFadeText
            text="Transforming data into intelligent systems that drive measurable outcomes and sustained business value."
            className="text-neutral-400 max-w-xl"
          />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div {...cardHover}>
            <Card className="h-full border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">

              <CardHeader>
                <BlockReveal>
                  <CardTitle className="text-white  text-center">Key Differentiators</CardTitle>
                </BlockReveal>
              </CardHeader>

              <CardContent className="space-y-5 text-sm text-neutral-300">

                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-pink-400 shrink-0"/>
                  <SplitFadeText
                    text="Deep AI expertise across predictive and generative systems"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0"/>
                  <SplitFadeText
                    text="Enterprise-grade reliability and data governance"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-red-400 shrink-0"/>
                  <SplitFadeText
                    text="Rapid deployment of production-ready AI solutions"
                    className="flex-1"
                  />
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...cardHover}>
            <Card className="h-full border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">

              <CardHeader>
                <BlockReveal>
                  <CardTitle className="text-white  text-center">Innovation & Insights</CardTitle>
                </BlockReveal>
              </CardHeader>

              <CardContent className="space-y-5 text-sm text-neutral-300">

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-pink-400 shrink-0"/>
                  <SplitFadeText
                    text="AI-driven discovery of hidden patterns in complex datasets"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-purple-400 shrink-0"/>
                  <SplitFadeText
                    text="Advanced ML models powering intelligent automation"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-red-400 shrink-0"/>
                  <SplitFadeText
                    text="Strategic insights enabling data-informed decision making"
                    className="flex-1"
                  />
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...cardHover}>
            <Card className="h-full border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">

              <CardHeader>
                <BlockReveal>
                  <CardTitle className="text-white  text-center">Functional Outcomes</CardTitle>
                </BlockReveal>
              </CardHeader>

              <CardContent className="space-y-5 text-sm text-neutral-300">

                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-pink-400 shrink-0"/>
                  <SplitFadeText
                    text="Operational automation across data workflows"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-purple-400 shrink-0"/>
                  <SplitFadeText
                    text="Unified data ecosystems for scalable analytics"
                    className="flex-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-red-400 shrink-0"/>
                  <SplitFadeText
                    text="Accelerated digital transformation and innovation"
                    className="flex-1"
                  />
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="md:col-span-3" {...cardHover}>
            <Card className="bg-neutral-900 border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">

              <CardHeader>
                <BlockReveal>
                  <CardTitle className="text-white  text-center">Benefit Enablers</CardTitle>
                </BlockReveal>
              </CardHeader>

              <CardContent>

                <div className="grid grid-cols-3 text-center gap-8">

                  <div className="flex flex-col items-center gap-3">
                    <Sparkles className="w-8 h-8 text-pink-400"/>
                    <SplitFadeText text="Intelligence" className="text-white"/>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <Cpu className="w-8 h-8 text-purple-400"/>
                    <SplitFadeText text="Automation" className="text-white"/>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <LineChart className="w-8 h-8 text-red-400"/>
                    <SplitFadeText text="Scalability" className="text-white"/>
                  </div>

                </div>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}