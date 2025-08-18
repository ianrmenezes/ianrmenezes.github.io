"use client";

// ────────────────────────────────────────────────────────────────────────────────
//  FOOTER SECTION - Bottom of page with social links and info
// ────────────────────────────────────────────────────────────────────────────────
// Contains social media links, personal info, and back-to-top functionality

import React from 'react';
import { motion } from "framer-motion";                    // For smooth animations
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"; // Icons
import { useInView } from "@/hooks/useInView";               // Detect when footer is visible

export default function Footer() {
  // Hook to detect when footer comes into view (triggers animations)
  const { ref, isInView } = useInView({ triggerOnce: true });

  // ────────────────────────────────────────────────────────────────────────────────
  //  SOCIAL MEDIA LINKS - Each with custom hover colors
  // ────────────────────────────────────────────────────────────────────────────────
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ianrmenezes",
      icon: Github,
      color: "hover:text-green-400",    // Green hover effect
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ian-menezes",
      icon: Linkedin,
      color: "hover:text-blue-400",     // Blue hover effect
    },
    {
      name: "Email",
      url: "mailto:menezesian145@gmail.com",
      icon: Mail,
      color: "hover:text-yellow-400",   // Yellow hover effect
    },
  ];

  // ────────────────────────────────────────────────────────────────────────────────
  //  SCROLL TO TOP FUNCTION - Smooth scroll back to hero section
  // ────────────────────────────────────────────────────────────────────────────────
  const handleScrollToTop = () => {
    // Primary method: Target the body element (main scroll container)
    document.body.scrollTo({
      top: 0,               // Scroll to very top
      behavior: 'smooth'    // Smooth animation
    });
    
    // Fallback method: Use window scroll (for better browser compatibility)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer ref={ref} className="py-16 px-0 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-0">
        {/* Main footer container with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}                  // Start invisible and below
          animate={isInView ? { opacity: 1, y: 0 } : {}}   // Fade in and slide up when visible
          transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth transition
          className="text-center space-y-8"
        >
          {/* ──────────────────────────────────────────────────────────────────── */}
          {/*  BACK TO TOP BUTTON - Centered at top of footer */}
          {/* ──────────────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}                  // Start invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}}   // Fade in and slide up
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}  // Slight delay
            className="flex justify-center mb-8 lg:mr-6"
          >
            <button
              onClick={handleScrollToTop}                     // Call scroll function on click
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                         border border-white/20 rounded-full text-white font-medium
                         transition-all duration-200 cursor-pointer z-50 relative
                         hover:scale-105 active:scale-95 transform"  // Hover and click effects
            >
              <ArrowUp className="w-5 h-5" />               {/* Up arrow icon */}
              <span className="font-medium">Back to Top</span>
            </button>
          </motion.div>

          {/* ──────────────────────────────────────────────────────────────────── */}
          {/*  MAIN FOOTER CONTENT - Name and Social Links */}
          {/* ──────────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
            
            {/* ── PERSONAL INFO SECTION ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}                 // Start invisible and to the left
              animate={isInView ? { opacity: 1, x: 0 } : {}}   // Fade in and slide right
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}  // Delayed animation
              className="text-left max-w-md mx-auto lg:mx-0 lg:-ml-20 lg:-mt-16"
            >
              {/* Your name with gradient effect and hover animation */}
              <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl shadow-white/50 hover:scale-105 hover:drop-shadow-2xl hover:shadow-white/80 transition-all duration-300 cursor-pointer">
                IAN MENEZES
              </h3>
              
              {/* Job title with hover effects */}
              <p className="text-gray-300 text-base leading-relaxed font-medium drop-shadow-lg shadow-gray-300/50 hover:scale-105 hover:drop-shadow-xl hover:shadow-gray-300/70 transition-all duration-300 cursor-pointer">
                Software Developer
              </p>
              
              {/* Personal description with hover effects */}
              <p className="text-gray-400 text-sm leading-relaxed mt-1 drop-shadow-md shadow-gray-400/40 hover:scale-105 hover:drop-shadow-lg hover:shadow-gray-400/60 transition-all duration-300 cursor-pointer">
                with a passion for technology and problem-solving.
              </p>
            </motion.div>

            {/* ── SOCIAL MEDIA LINKS SECTION ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}                  // Start invisible and below
              animate={isInView ? { opacity: 1, y: 0 } : {}}   // Fade in and slide up
              transition={{ duration: 0.8, delay: 0.07, ease: "easeOut" }}  // Delayed animation
              className="flex items-center gap-4 lg:ml-20"
            >
              {/* Loop through each social media link */}
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}                               // Unique key for React
                  href={link.url}                              // Link destination
                  target="_blank"                              // Open in new tab
                  rel="noopener noreferrer"                   // Security attributes
                  whileHover={{
                    scale: 1.1,                                // Grow on hover
                    y: -4,                                     // Move up on hover
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}                  // Shrink on click
                  className={`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm
                             border border-white/10 rounded-full text-white transition-all
                             duration-300 hover:bg-white/10 cursor-pointer ${link.color}`}  // Custom hover color per link
                >
                  <link.icon className="w-5 h-5" />          {/* Social media icon */}
                  <span className="font-medium">{link.name}</span>  {/* Link name */}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ──────────────────────────────────────────────────────────────────── */}
          {/*  COPYRIGHT NOTICE */}
          {/* ──────────────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}                  // Start invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}}   // Fade in and slide up
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}  // Final animation with longest delay
            className="text-gray-400 text-sm"
          >
            © 2025 Ian Menezes. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
//  HOW THIS COMPONENT WORKS:
// ────────────────────────────────────────────────────────────────────────────────
// 1. useInView detects when footer comes into viewport
// 2. Framer Motion animations trigger in sequence (staggered delays)
// 3. handleScrollToTop() uses dual scroll methods for browser compatibility
// 4. Social links array defines each platform with custom hover colors
// 5. Each social link has hover animations (scale, move up, color change)
// 6. All text elements have hover effects with shadows and scaling