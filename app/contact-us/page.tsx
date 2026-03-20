"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lanyard from "@/components/ui/Lanyard";
import FancyButton from "@/components/ui/button2";

export default function ContactUs() {
  // Prevent SSR — Lanyard uses WebGL
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative bg-brand overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#9333ea25,transparent_60%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[380px_1fr_1fr]">

        {/* COL 1: Lanyard */}
        <div className="hidden md:block" style={{ height: "100vh", position: "sticky", top: 0 }}>
          {mounted && <Lanyard />}
        </div>

        {/* COL 2: Heading */}
        <div className="flex flex-col justify-center gap-8 px-12 py-20 min-h-screen border-r border-white/5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-300 text-lg leading-relaxed max-w-sm"
          >
            Have an idea, automation challenge, or AI project in mind? We'd love
            to hear from you. Let's build something intelligent together.
          </motion.p>
          <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-purple-500" />
          <p className="text-sm text-gray-500">We usually respond within 24 hours.</p>
        </div>

        {/* COL 3: Form */}
        <div className="flex flex-col justify-center px-12 py-20 min-h-screen">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            <input type="email" placeholder="Your Email"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition" />
            <input type="text" placeholder="Subject"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition" />
            <textarea rows={6} placeholder="Message"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition resize-none" />
            <FancyButton title="Send Message" />
          </motion.form>
        </div>

      </div>
    </section>
  );
}