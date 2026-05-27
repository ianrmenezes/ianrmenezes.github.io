"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1Kel8s-FytkCdRfJ-JS0mF1hrVX4-uzDM/view?usp=sharing";

const bubbleConfigs = [
  { size: 6,  left: '10%', delay: 0    },
  { size: 4,  left: '30%', delay: 0.15 },
  { size: 7,  left: '55%', delay: 0.07 },
  { size: 4,  left: '75%', delay: 0.22 },
  { size: 5,  left: '90%', delay: 0.12 },
];

const hoverTransition = { type: 'tween' as const, duration: 0.12 };
const btnClass = "px-4 py-1.5 rounded-full text-[#1e3a5f] font-bold text-sm cursor-pointer hover:bg-white/60 transition-all duration-150 [font-family:var(--font-fredoka)]";

function Bubbles({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && bubbleConfigs.map((b, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0.75 }}
          animate={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.85, delay: b.delay, repeat: Infinity, repeatDelay: 0.25, ease: 'easeOut' }}
          className="absolute rounded-full bg-white/80 pointer-events-none"
          style={{ width: b.size, height: b.size, left: b.left, bottom: 0 }}
        />
      ))}
    </AnimatePresence>
  );
}

function NavButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      className="relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={hoverTransition}
    >
      <button onClick={onClick} className={btnClass}>{children}</button>
      <Bubbles show={hovered} />
    </motion.span>
  );
}

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      className="relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={hoverTransition}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>{children}</a>
      <Bubbles show={hovered} />
    </motion.span>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(document.body.scrollTop < 80);
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (isScrolling) return;
    setIsScrolling(true);
    const el = document.getElementById(id);
    if (!el) { setIsScrolling(false); return; }
    const rect = el.getBoundingClientRect();
    document.body.scrollTo({ top: document.body.scrollTop + rect.top - 80, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 600);
  };

  const navItems = [
    { label: 'Skills',     id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects',   id: 'projects' },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Name — top left */}
          <div className="fixed top-4 left-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col items-start gap-2 pl-1"
            >
              <span className="text-[#1e3a5f] font-semibold text-sm sm:text-base [font-family:var(--font-fredoka)]">
                Ian Menezes
              </span>
              <div className="flex gap-3.5">
                {[
                  { href: 'https://www.linkedin.com/in/ian-menezes', icon: Linkedin },
                  { href: 'https://github.com/ianrmenezes',          icon: Github   },
                  { href: 'mailto:imenezes@uoguelph.ca',             icon: Mail     },
                ].map(({ href, icon: Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#1e3a5f] hover:text-[#4a7fa5] transition-colors duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nav — top right */}
          <div className="fixed top-4 right-4 z-50">
            {/* Desktop: pill row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg shadow-blue-200/40"
            >
              {navItems.map((item) => (
                <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</NavButton>
              ))}
              <NavLink href={RESUME_URL}>Resume</NavLink>
            </motion.div>

            {/* Mobile: hamburger */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden flex flex-col items-end gap-2"
            >
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                className="flex items-center justify-center w-10 h-10 bg-white/40 backdrop-blur-md rounded-full shadow-lg shadow-blue-200/40 text-[#1e3a5f]"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex flex-col items-stretch gap-1 bg-white/60 backdrop-blur-md rounded-2xl p-2 shadow-lg shadow-blue-200/40 min-w-[140px]"
                  >
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-2 rounded-xl text-[#1e3a5f] font-bold text-sm text-right hover:bg-white/70 transition-colors duration-150 [font-family:var(--font-fredoka)]"
                      >
                        {item.label}
                      </button>
                    ))}
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-2 rounded-xl text-[#1e3a5f] font-bold text-sm text-right hover:bg-white/70 transition-colors duration-150 [font-family:var(--font-fredoka)]"
                    >
                      Resume
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
