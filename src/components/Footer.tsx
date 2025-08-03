"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Footer() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ianrmenezes',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ian-menezes',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:menezesian145@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer 
      ref={ref}
      className="py-16 px-4 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center items-center gap-8"
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
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white transition-all duration-300 hover:bg-white/10 cursor-pointer ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

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