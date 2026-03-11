"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import globals from "../../data/globals.json";
import VIVA from "../ui/VIVA";

const services = [
  {
    id: "customer-care",
    label: "Customer Care",
    desc: "Support & engagement solutions",
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    desc: "Insights from your data",
  },
  {
    id: "cloud-services",
    label: "Cloud Services",
    desc: "Scalable cloud infrastructure",
  },
  {
    id: "cyber-security",
    label: "Cyber Security",
    desc: "Protect your digital assets",
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    desc: "Intelligent process automation",
  },
];

export default function Navbar() {
  const [isTime, setIsTime] = useState(true);
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const servicesLiRef = useRef<HTMLLIElement>(null);
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, { damping: 40, stiffness: 500 });

  const width = useTransform(smoothScroll, [0, 300], ["100vw", "70vw"]);
  const top = useTransform(smoothScroll, [0, 300], ["0px", "8px"]);
  const bRadius = useTransform(smoothScroll, [0, 300], ["0px", "40px"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      };
      setTime(now.toLocaleTimeString("en-IN", options));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const toggle = setInterval(() => setIsTime((prev) => !prev), 5000);
    return () => clearInterval(toggle);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("pointerdown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen]);

  const handleServicesEnter = () => {
    if (servicesLiRef.current) {
      const rect = servicesLiRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 40,
        left: rect.left + rect.width / 2,
      });
    }
    setServicesOpen(true);
  };

  const dropdown =
    mounted &&
    servicesOpen &&
    createPortal(
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        style={{
          position: "fixed",
          top: dropdownPos.top - 40,
          left: dropdownPos.left,
          transform: "translateX(-50%)",
          width: 650,
          zIndex: 9999,
          paddingTop: 40,
        }}
      >
        {/* Bulge */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 56,
            height: 20,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "9999px 9999px 0 0",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
          }}
        />

        {/* Panel */}
        <div
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "none",
            borderRadius: 16,
            padding: 24,
            // boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
            }}
          >
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                onClick={() => setServicesOpen(false)}
                className="group flex flex-col gap-1 p-4 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-l font-semibold text-white group-hover:text-white transition-colors tracking-wide">
                  {service.label}
                </span>
                <span className="text-md text-white/60 group-hover:text-white/60 transition-colors">
                  {service.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      {dropdown}
      <motion.div
        style={{ width, top, borderRadius: bRadius }}
        className="fixed z-50 mx-auto left-0 right-0 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
      >
        <nav ref={menuRef} className="px-7 py-2 relative flex items-center">
          {/* LEFT */}
          <div className="w-[33%] flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <VIVA />
              <p className="text-white/80">{globals.subtitle}</p>
            </Link>
          </div>

          {/* CENTER LINKS */}
          <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 items-center text-lg font-semibold">
            <li className="relative">
              <Link
                href="/about"
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
              >
                ABOUT
              </Link>
            </li>

            <li
              ref={servicesLiRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/15 rounded-md transition-all duration-300"
              >
                SERVICES
              </Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="w-[33%] flex justify-end items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden flex flex-col justify-center items-center gap-1.25 p-2"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="sm:hidden flex flex-col mt-2 gap-3 text-center text-white/90 absolute top-full left-1/2 -translate-x-1/2 w-full">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:bg-white/10 rounded-md transition"
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:bg-white/10 rounded-md transition"
              >
                SERVICES
              </Link>
            </div>
          )}
        </nav>
      </motion.div>
    </>
  );
}
