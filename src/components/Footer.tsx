"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Footer() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  const socialLinks = [
    { name: "GitHub",   url: "https://github.com/ianrmenezes",              icon: Github,   style: "hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ian-menezes",     icon: Linkedin, style: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600" },
    { name: "Email",    url: "mailto:imenezes@uoguelph.ca",               icon: Mail,     style: "hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600" },
  ];

  const handleScrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="py-16 px-4 border-t border-blue-100/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          {/* Back to top */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/80 border-2 border-blue-200 rounded-full text-[#1e3a5f] font-bold shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>

          {/* Name */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-[#1e3a5f]">Ian Menezes</h3>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white/80 border-2 border-blue-100 rounded-full text-[#1e3a5f] font-bold shadow-sm transition-all duration-200 cursor-pointer ${link.style}`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#1e3a5f] text-sm font-semibold"
          >
            © 2026 Ian Menezes. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
