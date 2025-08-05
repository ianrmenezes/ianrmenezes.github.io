"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  return (
    <section 
      id="about"
      ref={ref}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            About Me
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            <p className="text-center">
              I'm Ian Menezes, a third-year Computer Science student at the University of Guelph with a strong interest in technology, problem-solving, and creating meaningful digital experiences. I enjoy developing projects that combine functionality with simplicity, exploring new tools and frameworks, and working with others to bring ideas to life. My goal is to continue building skills that allow me to design practical solutions for real-world challenges.
            </p>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pt-8"
          >
            <a
              href="https://drive.google.com/file/d/1Tgz65BS6yddCyyBJaJnlFdbKWhgYSfS7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black/80 backdrop-blur-sm border border-black/20 rounded-full text-white font-medium hover:bg-black/90 transition-all duration-300 hover:scale-105"
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