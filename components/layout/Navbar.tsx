"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import globals from "../../data/globals.json";
import VIVA from "../ui/VIVA";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";

const services = [
  { id: "customer-care", label: "Customer Care" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "cloud-services", label: "Cloud Services" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "ai-automation", label: "AI Automation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const servicesLiRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, { damping: 40, stiffness: 500 });
  const width = useTransform(smoothScroll, [0, 300], ["100vw", "85vw"]);
  const top = useTransform(smoothScroll, [0, 300], ["0px", "8px"]);
  const bRadius = useTransform(smoothScroll, [0, 300], ["0px", "40px"]);

  const pathName = usePathname();
  const disableScroll = pathName.startsWith("/services");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closePanel = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  // Navigate then close — ensures router.push fires before state cleanup
  const navigateTo = (href: string) => {
    router.push(href);
    setTimeout(closePanel, 50);
  };

  const handleServicesEnter = () => {
    if (servicesLiRef.current) {
      const rect = servicesLiRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 40, left: rect.left + rect.width / 2 });
    }
    setServicesOpen(true);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathName === "/";
    return pathName.startsWith(path);
  };

  // ── Desktop dropdown portal (unchanged) ──
  const dropdown =
    mounted &&
    servicesOpen &&
    createPortal(
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        style={{
          position: "fixed",
          top: dropdownPos.top - 55,
          left: dropdownPos.left,
          transform: "translateX(-50%)",
          zIndex: 9999,
          paddingTop: 40,
        }}
      >
        <div
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              onClick={() => setServicesOpen(false)}
              className="group flex gap-1 p-4 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              <span className="text-l font-semibold text-white group-hover:text-white transition-colors tracking-wide">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>,
      document.body,
    );

  // ── Mobile panel portal ──
  const mobilePanel =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop — pointer-events only on the backdrop div itself, not children */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closePanel}
              style={{
                position: "fixed", inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 99998,
              }}
            />

            {/* Panel — higher z than backdrop, clicks reach links */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()} // prevent backdrop close on panel click
              style={{
                position: "fixed",
                top: 0, right: 0, bottom: 0,
                width: "75vw", maxWidth: 320,
                zIndex: 99999,
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                background: "rgba(14,14,20,0.97)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                padding: "24px 0",
              }}
            >
              {/* Close button */}
              <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 20px 20px" }}>
                <button
                  onClick={closePanel}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10, padding: 8, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <X size={18} color="white" />
                </button>
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "0 20px 16px" }} />

              {/* Nav items */}
              <div style={{
                flex: 1, overflowY: "auto", padding: "0 12px",
                display: "flex", flexDirection: "column", gap: 4,
              }}>

                <button
                  onClick={() => navigateTo("/about")}
                  style={{
                    display: "block", padding: "14px 16px", borderRadius: 12, textAlign: "left",
                    color: isActive("/about") ? "white" : "rgba(255,255,255,0.85)",
                    background: isActive("/about") ? "rgba(255,255,255,0.12)" : "transparent",
                    fontWeight: 600, fontSize: 15, letterSpacing: "0.05em",
                    border: "none", cursor: "pointer", width: "100%",
                  }}
                >
                  ABOUT
                </button>

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((p) => !p)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px", borderRadius: 12,
                      background: isActive("/services") || mobileServicesOpen ? "rgba(255,255,255,0.12)" : "transparent",
                      border: "none", cursor: "pointer",
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 600, fontSize: 15, letterSpacing: "0.05em",
                    }}
                  >
                    <span>SERVICES</span>
                    <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={16} color="rgba(255,255,255,0.5)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          paddingLeft: 12, marginTop: 4, marginBottom: 8,
                          borderLeft: "2px solid rgba(236,72,153,0.4)",
                          marginLeft: 16, display: "flex", flexDirection: "column", gap: 2,
                        }}>
                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => navigateTo(`/services#${service.id}`)}
                              style={{
                                display: "block", padding: "10px 12px", borderRadius: 10, textAlign: "left",
                                fontSize: 14, fontWeight: 600, color: "white",
                                background: "transparent", border: "none", cursor: "pointer", width: "100%",
                              }}
                            >
                              {service.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => navigateTo("/contact-us")}
                  style={{
                    display: "block", padding: "14px 16px", borderRadius: 12, textAlign: "left",
                    color: isActive("/contact-us") ? "white" : "rgba(255,255,255,0.85)",
                    background: isActive("/contact-us") ? "rgba(255,255,255,0.12)" : "transparent",
                    fontWeight: 600, fontSize: 15, letterSpacing: "0.05em",
                    border: "none", cursor: "pointer", width: "100%",
                  }}
                >
                  CONTACT US
                </button>
              </div>

              <div style={{ height: 2, background: "linear-gradient(to right, #ec4899, #a855f7)", margin: "16px 20px 0" }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      {!disableScroll && dropdown}
      {mobilePanel}

      <motion.div
        style={
          disableScroll
            ? { width: "100vw", top: "0px", borderRadius: "0px" }
            : { width, top, borderRadius: bRadius }
        }
        className="fixed z-50 mx-auto left-0 right-0 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
      >
        <nav ref={menuRef} className="md:pl-10 pl-5 py-2 flex items-center">
          {/* LOGO */}
          <Link href="/" className="flex md:flex-row flex-col md:items-center md:gap-2">
            <VIVA />
            <p className="hidden md:block text-white/80 whitespace-nowrap">{globals.subtitle}</p>
          </Link>

          <div className="flex-1" />

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-8 items-center text-lg font-semibold whitespace-nowrap">
            <li>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-md transition-all duration-300
                  ${isActive("/about") ? "text-white bg-white/20 shadow-md" : "text-white/90 hover:text-white hover:bg-white/10"}`}
              >
                ABOUT
              </Link>
            </li>
            <li
              ref={servicesLiRef}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`px-4 py-2 rounded-md transition-all duration-300
                  ${isActive("/services") ? "text-white bg-white/20 shadow-md" : "text-white/90 hover:text-white hover:bg-white/15"}`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`px-4 py-2 rounded-md transition-all duration-300
                  ${isActive("/contact-us") ? "text-white bg-white/20 shadow-md" : "text-white/90 hover:text-white hover:bg-white/15"}`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="hidden md:block md:w-[33%]" />

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-3 mr-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white rounded-full" />
            <span className="block w-6 h-0.5 bg-white rounded-full" />
            <span className="block w-4 h-0.5 bg-white rounded-full self-start ml-1" />
          </button>
        </nav>
      </motion.div>
    </>
  );
}