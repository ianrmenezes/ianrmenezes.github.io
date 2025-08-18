"use client";

// ────────────────────────────────────────────────────────────────────────────────
//  HERO SECTION - Landing page with navigation
// ────────────────────────────────────────────────────────────────────────────────
// This is the first section users see with your name and main navigation

import React, { useState } from 'react';
import { motion } from 'framer-motion';              // For smooth animations
import { Download, ChevronDown } from 'lucide-react'; // Icons
import { useInView } from '@/hooks/useInView';        // Detect when section is visible
import { smoothScrollTo, getElementPosition } from '@/lib/utils'; // Smooth scroll utilities

export default function Hero() {
  // Hook to detect when this section comes into view (triggers animations)
  const { ref, isInView } = useInView({ triggerOnce: true });
  
  // Prevent multiple rapid clicks on navigation buttons
  const [isScrolling, setIsScrolling] = useState(false);

  // ────────────────────────────────────────────────────────────────────────────────
  //  SCROLL FUNCTION - Navigate to different sections
  // ────────────────────────────────────────────────────────────────────────────────
  const scrollToSection = async (sectionId: string) => {
    if (isScrolling) return; // Prevent multiple rapid clicks
    
    console.log(`Attempting to scroll to section: ${sectionId}`);
    setIsScrolling(true);
    
    try {
      // Find the target section by its ID
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Element with id '${sectionId}' not found`);
        console.log('Available elements:', document.querySelectorAll('section[id]'));
        console.log('All elements with IDs:', document.querySelectorAll('[id]'));
        setIsScrolling(false);
        return;
      }

      console.log(`Found element:`, element);
      console.log(`Element position:`, element.getBoundingClientRect());
      console.log(`Current scroll position:`, window.pageYOffset || document.documentElement.scrollTop);

      // Primary scroll method - smooth scroll to element
      console.log('Testing simple scroll...');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Backup scroll method - manual calculation and scroll
      setTimeout(() => {
        console.log('Testing window.scrollTo...');
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 80; // 80px offset for better positioning
        
        console.log(`Scrolling to position: ${targetPosition}`);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 100);
      
    } catch (error) {
      console.error('Scroll error:', error);
      // Fallback to simple scroll if main method fails
      try {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (fallbackError) {
        console.error('Fallback scroll also failed:', fallbackError);
      }
    } finally {
      // Re-enable scrolling after a delay
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  return (
    <section 
      ref={ref} // Reference for intersection observer
      className="h-screen flex flex-col items-center justify-center relative px-4"
    >
        {/* ──────────────────────────────────────────────────────────────────── */}
        {/*  MAIN CONTENT */}
        {/* ──────────────────────────────────────────────────────────────────── */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* ── YOUR NAME WITH GRADIENT AND GLOW EFFECT ── */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}                    // Start invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}}     // Fade in and move up when visible
            transition={{ duration: 0.8, ease: "easeOut" }}    // Smooth transition
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-500"
          >
            IAN MENEZES
          </motion.h1>

          {/* ── NAVIGATION MENU - Links to different sections ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}                     // Start invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}}      // Fade in and move up
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}  // Delayed animation
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-lg md:text-xl font-medium"
          >
            {/* ── ABOUT BUTTON ── */}
            <motion.button
              onClick={() => scrollToSection('about')}           // Scroll to About section
              whileHover={{ scale: 1.1, y: -2 }}               // Hover animation
              whileTap={{ scale: 0.95 }}                       // Click animation
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              ABOUT
              {/* Animated underline that appears on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>        {/* Visual separator */}
            
            {/* ── EXPERIENCE BUTTON ── */}
            <motion.button
              onClick={() => scrollToSection('experience')}     // Scroll to Experience section
              whileHover={{ scale: 1.1, y: -2 }}              // Hover animation
              whileTap={{ scale: 0.95 }}                      // Click animation
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              EXPERIENCE
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>        {/* Visual separator */}
            
            {/* ── PROJECTS BUTTON ── */}
            <motion.button
              onClick={() => scrollToSection('projects')}       // Scroll to Projects section
              whileHover={{ scale: 1.1, y: -2 }}              // Hover animation
              whileTap={{ scale: 0.95 }}                      // Click animation
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group"
            >
              PROJECTS
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
            <span className="text-gray-400">·</span>        {/* Visual separator */}
            
            {/* ── RESUME LINK (External) ── */}
            <motion.a
              href="https://drive.google.com/file/d/1MnFlzlUl9SeffkXMTJ_8wW2j7jvpZ2Nt/view?usp=drive_link"
              target="_blank"                                  // Open in new tab
              rel="noopener noreferrer"                       // Security attributes
              whileHover={{ scale: 1.1, y: -2 }}              // Hover animation
              whileTap={{ scale: 0.95 }}                      // Click animation
              className="hover:text-blue-400 focus:outline-none focus:ring-0 transition-colors duration-300 relative group cursor-pointer"
            >
              RESUME
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────── */}
        {/*  SCROLL INDICATOR - Bouncing arrow at bottom */}
        {/* ──────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}                            // Start invisible
          animate={isInView ? { opacity: 1 } : {}}            // Fade in when visible
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}  // Delayed appearance
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}          // Scroll to About when clicked
            whileHover={{ scale: 1.1 }}                      // Grow on hover
            whileTap={{ scale: 0.95 }}                       // Shrink on click
            animate={{ y: [0, 10, 0] }}                      // Bouncing animation
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}  // Infinite bounce
            className="text-white/60 hover:text-white focus:outline-none focus:ring-0 cursor-pointer transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />             {/* Down arrow icon */}
          </motion.button>
        </motion.div>
      </section>
    );
  }

// ────────────────────────────────────────────────────────────────────────────────
//  HOW THIS COMPONENT WORKS:
// ────────────────────────────────────────────────────────────────────────────────
// 1. useInView hook detects when the section enters the viewport
// 2. When visible, Framer Motion animations trigger (fade in, slide up)
// 3. Navigation buttons use scrollToSection() to smoothly scroll to other sections
// 4. Each button has hover effects (scale, underline animation)
// 5. The scroll indicator bounces infinitely to encourage scrolling
// 6. isScrolling state prevents multiple rapid clicks during scroll animation 