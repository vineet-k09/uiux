"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Domain } from "@/types/services";
import {
  Headphones,
  BarChart3,
  Cloud,
  Shield,
  Bot,
  MessageSquare,
  Activity,
  Workflow,
  Server,
  Terminal,
  Radar,
  FileText,
  Sparkles,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

export const DOMAIN_COLORS: Record<string, string> = {
  "customer-care": "#E60000",
  "data-analytics": "#9C2AA0",
  "cloud-services": "#E60000",
  "cyber-security": "#9C2AA0",
  "ai-automation": "#E60000",
};

const DOMAIN_ICONS: Record<string, LucideIcon> = {
  "customer-care": Headphones,
  "data-analytics": BarChart3,
  "cloud-services": Cloud,
  "cyber-security": Shield,
  "ai-automation": Bot,
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "cc-automation": MessageSquare,
  "cc-analytics": Activity,
  "da-pipelines": Workflow,
  "cs-migration": Server,
  "cs-devops": Terminal,
  "sec-soc": Radar,
  "ai-rpa": FileText,
  "ai-genai": Sparkles,
};

interface ChapterNavProps {
  domains: Domain[];
  activeDomainId: string;
  onDomainClick: (id: string) => void;
  onServiceClick?: (domainId: string, serviceId: string) => void;
}

export default function ChapterNav({
  domains,
  activeDomainId,
  onDomainClick,
  onServiceClick,
}: ChapterNavProps) {
  return (
    <aside
      className="sticky top-0 h-screen w-72 shrink-0 flex flex-col items-start justify-center gap-2 px-6 border-r border-neutral-800/60
      bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,116,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,103,249,0.25),transparent_40%),linear-gradient(135deg,#0f0f14_0%,#151521_40%,#1a1a2a_100%)]
      backdrop-blur-sm z-30 overflow-y-auto"
    >
      <div className="mb-4 px-2">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/40">
          Domains
        </h2>
      </div>

      {domains.map((domain) => {
        const color = DOMAIN_COLORS[domain.id] ?? "#6366f1";
        const isActive = activeDomainId === domain.id;
        const Icon = DOMAIN_ICONS[domain.id] ?? Bot;

        return (
          <div key={domain.id} className="w-full">
            <motion.button
              onClick={() => onDomainClick(domain.id)}
              className="relative z-10 group w-full"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="px-4 py-3 rounded-xl font-medium border w-full text-left flex items-center gap-3 transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
                animate={{
                  backgroundColor: isActive ? `${color}18` : "transparent",
                  borderColor: isActive
                    ? `${color}55`
                    : "rgba(255,255,255,0.08)",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                }}
                transition={{ duration: 0.25 }}
              >
                <Icon
                  size={18}
                  style={{
                    color: isActive ? color : "rgba(255,255,255,0.4)",
                  }}
                />

                <span className="truncate flex-1 text-[15px] font-semibold">
                  {domain.name}
                </span>

                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown size={14} style={{ opacity: 0.5 }} />
                </motion.span>
              </motion.div>

              {isActive && (
                <motion.div
                  layoutId="chapterIndicator"
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-full shadow-lg"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 14px ${color}`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 28,
                  }}
                />
              )}
            </motion.button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-8 pr-2 py-2 space-y-1">
                    {domain.services.map((service) => {
                      const SIcon = SERVICE_ICONS[service.id] ?? Sparkles;

                      return (
                        <button
                          key={service.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onServiceClick?.(domain.id, service.id);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] hover:text-white hover:bg-white/5 transition-all duration-200 text-left group"
                          style={{
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          <SIcon
                            size={14}
                            style={{ color: color + "80" }}
                            className="shrink-0 group-hover:scale-110 transition-transform"
                          />

                          <span className="truncate">{service.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </aside>
  );
}
