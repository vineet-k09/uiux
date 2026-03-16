
"use client"
import { motion } from "framer-motion"
import { Domain } from "@/types/services"
import TopicDetail from "./TopicDetail"

type Service = Domain["services"][number]

interface ServiceBlockProps {
  service: Service
  accentColor: string
  serviceIndex: number
  id?: string
}

export default function ServiceBlock({
  service,
  accentColor,
  serviceIndex,
  id,
}: ServiceBlockProps) {
  return (
    
    
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: serviceIndex * 0.07 }}
    >
      {/* Service header */}
      <div className="flex items-stretch gap-4 mb-5">
        <div
          className="w-0.75 rounded-full shrink-0"
          style={{ backgroundColor: accentColor + "70" }}
        />
        <div>
          <h3 className="text-h1 mb-1">
            {service.name}
          </h3>
          <p className="text-h2 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Use case cards VAR1 */}
      {/* <div className="flex flex-col gap-5">
        {service.use_cases.map((useCase, i) => (
          <TopicDetail
            key={i}
            domain={useCase}
            accentColor={accentColor}
          />
        ))}
      </div> */}

   {/* Use case cards VAR2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {service.use_cases.map((useCase, i) => (
    <TopicDetail
      key={i}
      domain={useCase}
      accentColor={accentColor}
    />
  ))}
</div>
      
      
    </motion.div>
  )
}