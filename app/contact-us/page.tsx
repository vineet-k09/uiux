"use client";

import { motion } from "framer-motion";
import FancyButton from "@/components/ui/button2";

export default function ContactUs() {
  return (
    <section className="relative min-h-screen bg-brand flex items-center overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea20,transparent_70%)]" />

      <div className="grid md:grid-cols-2 w-full px-10 md:px-20 gap-12 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-8xl font-extrabold leading-tight"
          >
            Contact <br className="hidden md:block" />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-md leading-relaxed"
          >
            Have an idea, automation challenge, or AI project in mind? We'd love
            to hear from you. Send us a message and let's build something
            intelligent together.
          </motion.p>

          {/* divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-px w-32 bg-linear-to-r from-pink-500 to-purple-500"
          />

          <p className="text-sm text-gray-400">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center"
        >
          <form className="w-full max-w-xl flex flex-col gap-6">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:border-pink-400 
              hover:border-white/30 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:border-pink-400 
              hover:border-white/30 transition"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 
              focus:outline-none focus:border-pink-400 
              hover:border-white/30 transition resize-none"
            />

            <FancyButton title="Send Message" />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
