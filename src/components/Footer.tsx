"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const [isScrolling, setIsScrolling] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ianrmenezes",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ian-menezes",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:menezesian145@gmail.com",
      icon: Mail,
      color: "hover:text-red-400",
    },
  ];

  const scrollToTop = async () => {
    if (isScrolling) return; // Prevent multiple rapid clicks
    
    setIsScrolling(true);
    
    try {
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // If already at top, don't scroll
      if (startPosition < 10) {
        setIsScrolling(false);
        return;
      }

      // Use the improved smooth scroll utility
      await smoothScrollTo(0, 200);
      
    } catch (error) {
      console.error('Scroll to top error:', error);
      
      // Fallback to native smooth scroll
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } finally {
      setIsScrolling(false);
    }
  };

  return (
    <footer ref={ref} className="py-16 px-0 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Back-to-Top (CENTRE) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="flex justify-center mb-8 lg:mr-6"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm
                         border border-white/10 rounded-full text-white transition-all
                         duration-300 hover:bg-white/10 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="font-medium">Back to Top</span>
            </motion.button>
          </motion.div>

          {/* Top Row - Name on left, Social Links in middle */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
            {/* Left Side - Name and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-left max-w-md mx-auto lg:mx-0 lg:-ml-20 lg:-mt-16"
            >
                          <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl shadow-white/50 hover:scale-105 hover:drop-shadow-2xl hover:shadow-white/80 transition-all duration-300 cursor-pointer">
              IAN MENEZES
            </h3>
            <p className="text-gray-300 text-base leading-relaxed font-medium drop-shadow-lg shadow-gray-300/50 hover:scale-105 hover:drop-shadow-xl hover:shadow-gray-300/70 transition-all duration-300 cursor-pointer">
              Software Developer at Blink Gaming Gadgets
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-1 drop-shadow-md shadow-gray-400/40 hover:scale-105 hover:drop-shadow-lg hover:shadow-gray-400/60 transition-all duration-300 cursor-pointer">
              with a passion for technology and problem-solving.
            </p>
            </motion.div>

            {/* Center - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.07, ease: "easeOut" }}
              className="flex items-center gap-4 lg:ml-20"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm
                             border border-white/10 rounded-full text-white transition-all
                             duration-300 hover:bg-white/10 cursor-pointer ${link.color}`}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-sm"
          >
            © 2025 Ian Menezes. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}