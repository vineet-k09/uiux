import { motion } from "motion/react";

interface NumberCardProps {
  value: string;
  label: string;
  delay: number;
}

export default function NumberCard({ value, label, delay }: NumberCardProps) {
  return (
    <motion.div
      className="py-4 border-t border-border"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {value}
      </p>
      <p className="font-body text-sm text-muted-foreground mt-1">
        {label}
      </p>
    </motion.div>
  );
}
