"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import globals from "../../data/globals.json";
import VIVA from "../ui/VIVA";
import { usePathname } from "next/navigation";

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
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const servicesLiRef = useRef<HTMLLIElement>(null);
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, { damping: 40, stiffness: 500 });

  const width = useTransform(smoothScroll, [0, 300], ["100vw", "85vw"]);
  const top = useTransform(smoothScroll, [0, 300], ["0px", "8px"]);
  const bRadius = useTransform(smoothScroll, [0, 300], ["0px", "40px"]);

  const pathName = usePathname();
  const disableScroll = pathName.startsWith("/services");

  useEffect(() => {
    setMounted(true);
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
          top: dropdownPos.top - 55,
          left: dropdownPos.left,
          transform: "translateX(-50%)",
          zIndex: 9999,
          paddingTop: 40,
        }}
      >
        {/* Bulge */}
        {/* <div
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
        /> */}

        {/* Panel */}
        <div
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            // borderTop: "none",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                onClick={() => setServicesOpen(false)}
                className="group flex  gap-1 p-4 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-l font-semibold text-white group-hover:text-white transition-colors tracking-wide">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>,
      document.body,
    );

  const isActive = (path: string) => {
    if (path === "/") return pathName === "/";
    return pathName.startsWith(path);
  };

  return (
    <>
      {!disableScroll && dropdown}
      <motion.div
        style={
          disableScroll
            ? { width: "100vw", top: "0px", borderRadius: "0px" }
            : { width, top, borderRadius: bRadius }
        }
        className="fixed z-50 mx-auto left-0 right-0 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
      >
        <nav ref={menuRef} className="md:pl-10 pl-5 py-2 flex items-center">
          {/* LEFT */}
          <Link
            href="/"
            className="flex md:flex-row flex-col md:items-center md:gap-2"
          >
            <VIVA />
            <p className="text-white/80 whitespace-nowrap">
              {globals.subtitle}
            </p>
          </Link>

          {/* PUSH EVERYTHING RIGHT */}
          <div className="flex-1" />

          {/* NAV LINKS */}
          <ul className="flex gap-8 items-center text-lg font-semibold whitespace-nowrap">
            <li>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-md transition-all duration-300
                  ${
                    isActive("/about")
                      ? "text-white bg-white/20 shadow-md"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
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
                  ${
                    isActive("/services")
                      ? "text-white bg-white/20 shadow-md"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={`px-4 py-2 rounded-md transition-all duration-300
                  ${
                    isActive("/contact-us")
                      ? "text-white bg-white/20 shadow-md"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="block md:w-[33%]"></div>

          {/* RIGHT */}
          <div className="flex justify-end items-center gap-4">
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
