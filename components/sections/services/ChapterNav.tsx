"use client";
import { motion } from "framer-motion";
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
}: ChapterNavProps) {
  return (
    <aside
      className="top-14 fixed w-screen
      border-r border-neutral-800/60
      backdrop-blur-sm z-30
      py-4 flex flex-col 
      items-center"
    >
      <div className="flex gap-7">
      {domains.map((domain) => {
        const color = DOMAIN_COLORS[domain.id] ?? "#6366f1";
        const isActive = activeDomainId === domain.id;
        const Icon = DOMAIN_ICONS[domain.id] ?? Bot;
        return (
          <div key={domain.id} className="">
            <motion.button
              onClick={() => onDomainClick(domain.id)}
              className="z-30 group max-w-50"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              >
              <motion.div
                className="px-4 py-3 rounded-xl font-medium border 
                items-center
                gap-3 transition-all duration-300 
                group-hover:border-white/20 group-hover:text-white"
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

                <span className="truncate flex-1 text-[13px] font-semibold">
                  {domain.name}
                </span>
              </motion.div>
            </motion.button>
          </div>
        );
      })}
        </div>
    </aside>
  );
}
