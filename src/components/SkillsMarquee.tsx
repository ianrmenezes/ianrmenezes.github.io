"use client";

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useMarqueeSpeed } from '@/hooks/useMarqueeSpeed';
import { skills } from '@/data/skills';
import JavaIcon from '@/components/JavaIcon';
import { CCppIcon } from '@/data/skills';
import { SiDart } from 'react-icons/si';

export default function SkillsMarquee() {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const { handleMouseEnter, handleMouseLeave } = useMarqueeSpeed();

  // Debug: Log all skills to see what's available
  console.log('All skills:', skills.map(s => ({ id: s.id, name: s.name, size: s.size })));
  console.log('Looking for specific skills:', {
    flutter: skills.find(s => s.id === 'flutter'),
    docker: skills.find(s => s.id === 'docker'),
    googlecloud: skills.find(s => s.id === 'googlecloud')
  });

  const renderIcon = (skill: any) => {
    if (skill.id === 'java') {
      return <JavaIcon size={skill.size ?? 24} />;
    }
  
    if (skill.id === 'ccpp') {
      return <CCppIcon size={skill.size ?? 24} />;
    }
  
    return (
      <skill.icon
        size={skill.size ?? 24}
        style={{ color: skill.color }}
        fill="currentColor"
      />
    );
  };

  return (
    <section ref={ref} className="py-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        {/* Marquee Container */}
        <div className="space-y-8">
          {/* First Row - Scroll Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 mx-8 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {renderIcon(skill)}
                  <span className="text-white font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Second Row - Scroll Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex animate-marquee-reverse">
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-reverse-${index}`}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 mx-8 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {renderIcon(skill)}
                  <span className="text-white font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}