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

import valueData from "@/data/valueProposition.json"

const cardHover = {
  whileHover: { y: -6, scale: 1.02 },
  transition: { type: "spring" as const, stiffness: 200, damping: 20 }
}

const IconMap: Record<string, React.ComponentType<any>> = {
  Brain,
  Sparkles,
  LineChart,
  Zap,
  ShieldCheck,
  Rocket,
  Cpu,
  Database,
  Workflow
};

export default function ValueProposition() {
  return (
    <section className="w-full py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            {valueData.heading}
          </h2>
          <SplitFadeText
            text={valueData.subtitle}
            className="text-neutral-400 max-w-xl"
          />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {valueData.cards.map((card, idx) => (
            <motion.div key={idx} {...cardHover}>
              <Card className="h-full border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">
                <CardHeader>
                  <BlockReveal>
                    <CardTitle className="text-white text-center">{card.title}</CardTitle>
                  </BlockReveal>
                </CardHeader>
                <CardContent className="space-y-5 text-sm text-neutral-300">
                  {card.items.map((item, itemIdx) => {
                    const IconComponent = IconMap[item.icon];
                    return (
                      <div key={itemIdx} className="flex items-start gap-3">
                        {IconComponent && <IconComponent className={`w-5 h-5 ${item.color} shrink-0`} />}
                        <SplitFadeText
                          text={item.text}
                          className="flex-1"
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Benefit Enablers Card */}
          <motion.div className="md:col-span-3" {...cardHover}>
            <Card className="bg-neutral-900 border-neutral-800 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]">
              <CardHeader>
                <BlockReveal>
                  <CardTitle className="text-white text-center">{valueData.benefitEnablers.title}</CardTitle>
                </BlockReveal>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 text-center gap-8">
                  {valueData.benefitEnablers.items.map((item, itemIdx) => {
                    const IconComponent = IconMap[item.icon];
                    return (
                      <div key={itemIdx} className="flex flex-col items-center gap-3">
                        {IconComponent && <IconComponent className={`w-8 h-8 ${item.color}`} />}
                        <SplitFadeText text={item.label} className="text-white" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}