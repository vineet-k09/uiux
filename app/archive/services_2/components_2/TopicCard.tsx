import { motion } from "framer-motion";
import { Domain } from "@/types/services";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  domain: Domain;
  isActive: boolean;
  onClick: () => void;
  index: number;
  progress: number;
}

const TopicCard = ({ domain, isActive, onClick, index, progress }: TopicCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      onClick={onClick}
      className={cn(
        "min-w-[200px] md:min-w-0 md:w-full text-left rounded-xl px-4 md:px-5 transition-all duration-500 border relative overflow-hidden shrink-0 md:shrink",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(340,75%,55%)]",
        isActive
          ? "bg-[hsl(280,30%,14%)] border-[hsl(340,75%,55%,0.3)] shadow-lg shadow-[hsl(340,75%,55%,0.1)] py-4 md:py-6 scale-[1.03]"
          : "bg-[hsl(0,0%,9%)] border-transparent hover:border-[hsl(0,0%,16%)] hover:shadow-sm py-3 scale-100 opacity-70 hover:opacity-90"
      )}
    >
      {/* Autoplay progress bar */}
      {isActive && (
        <div
          className="absolute bottom-0 left-0 h-[3px] rounded-full"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(135deg, hsl(340, 75%, 55%), hsl(280, 60%, 50%))',
          }}
        />
      )}

      <div className="flex items-center gap-3">
       
        <div className="min-w-0">
          <h3
            className={cn(
              "font-semibold truncate transition-all duration-500",
              isActive ? "text-base text-[hsl(340,75%,55%)]" : "text-sm text-[hsl(0,0%,93%)]"
            )}
          >
            {domain.name}
          </h3>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-[hsl(0,0%,55%)] mt-1 line-clamp-2"
            >
              {domain.description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default TopicCard;
