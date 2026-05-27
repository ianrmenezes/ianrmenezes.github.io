"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bubbleConfigs = [
  { size: 6,  left: '10%', delay: 0    },
  { size: 4,  left: '30%', delay: 0.15 },
  { size: 7,  left: '55%', delay: 0.07 },
  { size: 4,  left: '75%', delay: 0.22 },
  { size: 5,  left: '90%', delay: 0.12 },
];

export function BubbleWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      className={`relative inline-flex ${className ?? ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'tween', duration: 0.12 }}
    >
      {children}
      <AnimatePresence>
        {hovered && bubbleConfigs.map((b, i) => (
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
    </motion.span>
  );
}
