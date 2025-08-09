"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { smoothScrollTo, getElementPosition } from '@/lib/utils';

export default function Hero() {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = async (sectionId: string) => {
    if (isScrolling) return; // Prevent multiple rapid clicks
    
    setIsScrolling(true);
    
    try {
      // Find the element
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Element with id '${sectionId}' not found`);
        setIsScrolling(false);
        return;
      }

      // Use smooth scrolling for better UX
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
    } catch (error) {
      console.error('Scroll error:', error);
    } finally {
      setIsScrolling(false);
    }
  };

  return (
    <section 
      ref={ref}
      className="h-screen flex flex-col items-center justify-center relative px-4"
    >
        {/* Main Content */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-500"
          >
            IAN MENEZES
          </motion.h1>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-lg md:text-xl font-medium"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              ABOUT
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>
            <motion.button
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              EXPERIENCE
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              PROJECTS
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>
            <motion.a
              href="https://drive.google.com/file/d/1MnFlzlUl9SeffkXMTJ_8wW2j7jvpZ2Nt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group cursor-pointer"
            >
              RESUME
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 hover:text-white focus:outline-none focus:ring-0 cursor-pointer transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>
    );
  } 