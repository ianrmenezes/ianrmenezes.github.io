"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black text-[#1e3a5f]"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-[#1e3a5f] text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
              Hi I&apos;m Ian, Computer Science student at the University of Guelph with a passion for
              technology and problem-solving. I enjoy exploring new tools, building projects, and
              collaborating with others to create practical solutions.
              <br /><br />
              Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
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
        </motion.div>
      </div>
    </section>
  );
}
