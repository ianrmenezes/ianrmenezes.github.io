"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useInView } from '@/hooks/useInView';



export default function Hero() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const rect = element.getBoundingClientRect();
    document.body.scrollTo({ top: document.body.scrollTop + rect.top - 80, behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20"
    >
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-[#1e3a5f] tracking-tight leading-none"
        >
          Ian Menezes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'tween', duration: 0.12 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="text-[#1e3a5f] text-base md:text-lg leading-relaxed font-semibold max-w-xl mx-auto cursor-default"
        >
          Hi I&apos;m Ian, Computer Science student @ UofG with a passion for
          technology and problem-solving. I enjoy exploring new tools, building projects, and
          collaborating with others to create practical solutions.
          <br /><br />
          Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <a
            href="https://drive.google.com/file/d/167lURCr_XJPq1k_84rTj9GRcNajFYeOz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b8fa8] rounded-full text-white font-bold hover:bg-[#4a7fa5] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            View My Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('skills')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-300 hover:text-blue-500 focus:outline-none transition-colors duration-200 cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
