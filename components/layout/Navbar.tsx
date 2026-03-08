'use client'

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import globals from '../../data/globals.json';
import VIVA from '../ui/VIVA';

export default function Navbar() {
  const [isTime, setIsTime] = useState(true);
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, { damping: 40, stiffness: 500 });

  const width = useTransform(smoothScroll, [0, 300], ['100vw', '70vw']);
  const top = useTransform(smoothScroll, [0, 300], ['0px', '8px']);
  const bRadius = useTransform(smoothScroll, [0, 300], ['0px', '40px']);
  const fontSize = useTransform(smoothScroll, [0, 300], [
    'clamp(1rem, 3vw, 2.5rem)',
    'clamp(1rem, 2.5vw, 2rem)',
  ]);

  // Update time every minute
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      };
      setTime(now.toLocaleTimeString('en-IN', options));
    };
    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle time/weather every 5 seconds
  useEffect(() => {
    const toggle = setInterval(() => setIsTime(prev => !prev), 5000);
    return () => clearInterval(toggle);
  }, []);

  // Close mobile menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
  style={{ width, top, borderRadius: bRadius }}
  className="fixed z-50 mx-auto left-0 right-0 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
>
  <nav ref={menuRef} className="px-7 py-2 relative flex items-center">
    
    {/* Left: Logo */}
    <div className="w-[33%] flex items-center">
      <Link href={'/'} className="flex items-center gap-2">
        <VIVA />
        <p className="text-white/80">{globals.subtitle}</p>
      </Link>
    </div>

    {/* Center: Links */}
    <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 items-center text-lg font-semibold">
      {[
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICES', href: '/services' },
      ].map((link, idx) => (
        <li key={idx} className="relative">
          <Link
            href={link.href}
            className="
              px-4 py-2 text-white/90 hover:text-white
              hover:bg-white/10 rounded-md
              transition-all duration-300
              after:absolute after:left-2 after:right-2 after:bottom-1
              after:h-[2px] after:w-0 after:bg-purple-400
              after:transition-all after:duration-300
              hover:after:w-[calc(100%-16px)]
            "
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Right: Time / Mobile */}
    <div className="w-[33%] flex justify-end items-center gap-4">
      {/* Time or other right items can go here */}
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden flex flex-col justify-center items-center gap-[5px] p-2"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="sm:hidden flex flex-col mt-2 gap-3 text-center text-white/90 absolute top-full left-1/2 -translate-x-1/2 w-full">
        {[
          { name: 'ABOUT', href: '/about' },
          { name: 'SERVICES', href: '/services' },
        ].map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="py-2 hover:bg-white/10 rounded-md transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    )}
  </nav>
</motion.div>
  );
}