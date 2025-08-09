"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from '@/hooks/useInView';
import { skills } from '@/data/skills';
import JavaIcon from '@/components/JavaIcon';
import { CCppIcon } from '@/data/skills';
import { SiDart } from 'react-icons/si';

const SkillsMarquee = () => {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

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

  // Split skills into two rows for the marquee effect
  const firstRowSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRowSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section ref={ref} className="py-20 px-4" id="skills">
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

        {/* First row - Left to Right */}
        <div className="mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              ref={row1Ref}
              className="flex gap-8 py-4"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills to create a seamless loop */}
              {[...firstRowSkills, ...firstRowSkills, ...firstRowSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  className="flex items-center flex-shrink-0 px-4"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 mr-3 relative flex-shrink-0 flex items-center justify-center">
                    {renderIcon(skill)}
                  </div>
                  <span className="text-lg font-medium whitespace-nowrap text-white">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second row - Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              ref={row2Ref}
              className="flex gap-8 py-4"
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills to create a seamless loop */}
              {[...secondRowSkills, ...secondRowSkills, ...secondRowSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  className="flex items-center flex-shrink-0 px-4"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 mr-3 relative flex-shrink-0 flex items-center justify-center">
                    {renderIcon(skill)}
                  </div>
                  <span className="text-lg font-medium whitespace-nowrap text-white">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsMarquee;