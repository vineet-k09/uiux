"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import PixelBlast from "../threejs/pixel_bg/PixelBlast";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
  );

  return (
    <section ref={ref} className="relative h-screen">
      {/* BACKGROUND PANEL */}
      <motion.div
        style={{ clipPath }}
        className="fixed inset-0 z-0 flex items-center justify-center w-full"
      >
        <div
          className="absolute bg-black"
          style={{ width: "100%", height: "100" }}
        >
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#E60000"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.9}
            rippleThickness={0.02}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div className="absolute inset-0 bg-viva" />
        <h2
          className="relative text-viva-foreground font-bold leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(6rem, 25vw, 28rem)" }}
        >
          vois
        </h2>
      </motion.div>

      {/* FOOTER CONTENT */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white z-10 pt-8 pb-4 px-10">
        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h4 className="font-bold mb-4">Operational responsibilities</h4>
            <Link
              href="https://www.vodafone.com/sustainable-business/empowering-people"
              target="_blank"
            >
              Code of Conduct
            </Link>
          </div>

          <div></div>

          <div className="flex flex-col items-end">
            <Image
              src="vodafonelogo_icon.svg"
              alt="Vodafone Logo"
              width={60}
              height={60}
              className="mb-2"
            />
            <p>
              Powered by <b>VOIS</b>
            </p>
          </div>
        </div>
        <hr className="border-gray-600 my-4" />
        <div className="flex gap-4 justify-center">
          <Link href="/sitemap">Sitemap</Link>
          <div className="block bg-white h-6 w-0.5"></div>
          <Link href="/contact-us">Contact us</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
