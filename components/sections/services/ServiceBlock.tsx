"use client";
import { motion } from "framer-motion";
import { Domain } from "@/types/services";
import TopicDetail from "./TopicDetail";

type Service = Domain["services"][number];

interface ServiceBlockProps {
  service: Service;
  accentColor: string;
  serviceIndex: number;
  id?: string;
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
      {/* Use case cards VAR2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        <div className="items-center flex">
          <div>
            <h3 className="text-3xl font-bold mb-1">
              {service.name}
            </h3>
            <p className="text-[13px] leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
        {service.use_cases.map((useCase, i) => (
          <TopicDetail key={i} domain={useCase} accentColor={accentColor} />
        ))}
      </div>
    </motion.div>
  );
}
