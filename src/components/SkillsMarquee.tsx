"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from '@/hooks/useInView';
import { skills } from '@/data/skills';
import JavaIcon from '@/components/JavaIcon';
import { CCppIcon } from '@/data/skills';

const SkillsMarquee = () => {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const renderIcon = (skill: any) => {
    if (skill.id === 'java') return <JavaIcon size={skill.size ?? 24} />;
    if (skill.id === 'ccpp') return <CCppIcon size={skill.size ?? 24} />;
    return (
      <skill.icon
        size={skill.size ?? 24}
        style={{ color: skill.color }}
        fill="currentColor"
      />
    );
  };

  const firstRowSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRowSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section ref={ref} className="py-24 px-4" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-black text-[#1e3a5f] text-center mb-14"
        >
          Skills & Technologies
        </motion.h2>

        {/* Row 1 — left to right */}
        <div className="mb-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#93c5fd] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#93c5fd] to-transparent pointer-events-none" />
          <div className="overflow-hidden">
            <motion.div
              ref={row1Ref}
              className="flex gap-6 py-3"
              animate={{ x: [0, -1000] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
            >
              {[...firstRowSkills, ...firstRowSkills, ...firstRowSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  className="flex items-center gap-2.5 flex-shrink-0 px-4 py-2"
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-6">
                    {renderIcon(skill)}
                  </div>
                  <span className="text-sm font-bold whitespace-nowrap text-[#0a2540]">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#93c5fd] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#93c5fd] to-transparent pointer-events-none" />
          <div className="overflow-hidden">
            <motion.div
              ref={row2Ref}
              className="flex gap-6 py-3"
              animate={{ x: [-1000, 0] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 50, ease: 'linear' } }}
            >
              {[...secondRowSkills, ...secondRowSkills, ...secondRowSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${index}`}
                  className="flex items-center gap-2.5 flex-shrink-0 px-4 py-2"
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-6">
                    {renderIcon(skill)}
                  </div>
                  <span className="text-sm font-bold whitespace-nowrap text-[#0a2540]">{skill.name}</span>
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
