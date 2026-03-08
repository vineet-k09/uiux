import { motion, AnimatePresence } from "framer-motion";
import { Domain } from "@/types/services";

interface TopicDetailProps {
  domain: Domain;
}

const TopicDetail = ({ domain }: TopicDetailProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={domain.id}
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,7%)] p-5 md:p-10 shadow-lg max-h-[80vh] flex flex-col overflow-y-auto"
      >
        <div className="space-y-8 flex-1 ">
          {domain.services.map((service, sIdx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sIdx * 0.08 }}
              className="space-y-4"
            >
              {/* Service header */}
              <div className="relative pl-4 border-l-2 border-[hsl(340,75%,55%)]">
                <h3 className="text-lg font-bold text-[hsl(0,0%,93%)]">{service.name}</h3>
                <p className="text-xs text-[hsl(0,0%,55%)] mt-0.5">{service.description}</p>
              </div>

              {/* Use cases */}
              <div className="grid gap-3">
                {service.use_cases.map((uc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sIdx * 0.08 + i * 0.04 }}
                    className="group rounded-xl border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,9%)] p-4 md:p-5 hover:border-[hsl(340,75%,55%,0.3)] transition-colors duration-300 relative overflow-hidden"
                  >
                    {/* linear hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-[hsl(340,75%,55%,0.1)] to-[hsl(280,60%,50%,0.1)]" />

                    <div className="relative z-10 space-y-3">
                      <h4 className="text-sm font-bold text-[hsl(340,75%,55%)]">
                        {uc.title}
                      </h4>

                      {/* Horizontal Problem → Solution → Impact */}
                      <div className="flex flex-col md:flex-row items-stretch gap-0 text-xs">
                        {/* <div className="flex flex-col md:flex-row items-stretch gap-0 text-xs h-[180px] overflow-hidden"> */}
                        {/* Problem */}
                        <div className="flex-1 flex flex-col items-center text-center p-3">
                          <div className="w-3 h-3 rounded-full bg-[hsl(340,75%,55%)] border-2 border-[hsl(340,75%,55%,0.3)] mb-2" />
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[hsl(340,75%,55%,0.15)] text-[hsl(340,75%,55%)] font-semibold text-[10px] uppercase tracking-wider mb-1.5">Problem</span>
                          <p className="text-[hsl(0,0%,55%)] leading-relaxed">{uc.problem}</p>
                        </div>

                        {/* Connector line */}
                        <div className="hidden md:flex items-center shrink-0">
                          <div className="w-8 h-0.5 bg-linear-to-r from-[hsl(340,75%,55%,0.4)] to-[hsl(280,60%,50%,0.4)]" />
                        </div>
                        <div className="flex md:hidden justify-center">
                          <div className="h-6 w-0.5 bg-linear-to-b from-[hsl(340,75%,55%,0.4)] to-[hsl(280,60%,50%,0.4)]" />
                        </div>

                        {/* Solution */}
                        <div className="flex-1 flex flex-col items-center text-center p-3">
                          <div className="w-3 h-3 rounded-full bg-[hsl(280,60%,50%)] border-2 border-[hsl(280,60%,50%,0.3)] mb-2" />
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[hsl(280,60%,50%,0.15)] text-[hsl(280,60%,50%)] font-semibold text-[10px] uppercase tracking-wider mb-1.5">Solution</span>
                          <p className="text-[hsl(0,0%,55%)] leading-relaxed">{uc.solution}</p>
                        </div>

                        {/* Connector line */}
                        <div className="hidden md:flex items-center shrink-0">
                          <div className="w-8 h-0.5 bg-linear-to-r from-[hsl(280,60%,50%,0.4)] to-[hsl(280,40%,18%,0.4)]" />
                        </div>
                        <div className="flex md:hidden justify-center">
                          <div className="h-6 w-0.5 bg-linear-to-b from-[hsl(280,60%,50%,0.4)] to-[hsl(280,40%,18%,0.4)]" />
                        </div>

                        {/* Impact */}
                        <div className="flex-1 flex flex-col items-center text-center p-3">
                          <div className="w-3 h-3 rounded-full bg-[hsl(280,40%,18%)] border-2 border-[hsl(280,40%,18%,0.3)] mb-2" />
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[hsl(280,40%,18%)] text-[hsl(280,20%,85%)] font-semibold text-[10px] uppercase tracking-wider mb-1.5">Impact</span>
                          <p className="text-[hsl(0,0%,55%)] leading-relaxed">{uc.impact}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopicDetail;
