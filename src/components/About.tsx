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
            className="text-4xl md:text-5xl font-bold text-black dark:text-white drop-shadow-lg hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            style={{
              transition: 'all 0.1s ease-out',
              transform: 'translateY(0) scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            About Me
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-lg hover:bg-slate-800/95 hover:border-slate-600/60 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer">
                              <p className="text-center text-white font-normal">
                  A curious and adaptable developer passionate about turning ideas into simple, functional, and impactful digital solutions. My journey in tech started with a fascination for how things work, and I've since worked on projects ranging from websites to mobile apps. I enjoy learning new technologies, solving problems, and collaborating with others to bring ideas to life — always aiming to make technology useful and enjoyable.
                </p>
            </div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pt-8"
          >
            <a
              href="https://drive.google.com/file/d/1MnFlzlUl9SeffkXMTJ_8wW2j7jvpZ2Nt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/80 backdrop-blur-sm border border-blue-400/30 rounded-full text-white font-medium hover:bg-blue-600/90 transition-all duration-300 hover:scale-105"
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