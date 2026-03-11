import { useRef, useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
}

export default function WorldMap({ dots = [] }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#ffffff59",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-3/1 relative overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.6 0.2 280)" />
            <stop offset="100%" stopColor="oklch(0.72 0.22 340)" />
          </linearGradient>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="5%" stopColor="oklch(0.6 0.2 280)" />
            <stop offset="50%" stopColor="oklch(0.72 0.22 340)" />
            <stop offset="95%" stopColor="oklch(0.6 0.2 280)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.25,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const sp = projectPoint(dot.start.lat, dot.start.lng);
          const ep = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              <circle cx={sp.x} cy={sp.y} r="2" fill="url(#brand-grad)" />
              <circle
                cx={sp.x}
                cy={sp.y}
                r="2"
                fill="oklch(0.6 0.2 280)"
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={ep.x} cy={ep.y} r="2" fill="url(#brand-grad)" />
              <circle
                cx={ep.x}
                cy={ep.y}
                r="2"
                fill="oklch(0.72 0.22 340)"
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
