"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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
        className="fixed inset-0 z-0 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-viva" />
        <h2
          className="relative text-viva-foreground font-bold leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(6rem, 25vw, 28rem)" }}
        >
          viva
        </h2>
      </motion.div>

      {/* FOOTER CONTENT */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white z-10 pt-8 pb-4 px-10">
        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h4 className="font-bold mb-4">Operational responsibilities</h4>
            <Link href="https://www.vodafone.com/sustainable-business/empowering-people" target="_blank">
              Code of Conduct
            </Link>
          </div>

          <div>
            {/* <h4 className="font-bold mb-4">Policies</h4>
            <p>Privacy policy</p>
            <p>Cookie notice</p>
            <p>Terms & conditions</p> */}
          </div>

          <div className="flex flex-col items-end">
            <Image src="vodafonelogo_icon.svg" alt="Vodafone Logo" width={60} height={60} className="mb-2" />
            <p>Powered by <b>VOIS</b></p>
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
