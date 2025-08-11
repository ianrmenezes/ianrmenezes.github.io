"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { experience } from '@/data/experience';
import { formatPeriod } from '@/lib/utils';

export default function Experience() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-16 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            style={{
              transition: 'all 0.1s ease-out',
              transform: 'translateY(0) scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-neutral-950" />

                  {/* Content */}
                  <div className="ml-12 md:ml-16">
                    <motion.div 
                      className="bg-black/20 backdrop-blur-sm border border-black/20 rounded-xl p-6 hover:bg-black/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] cursor-pointer transform transition-transform duration-100"
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4 text-white dark:text-white text-sm font-medium drop-shadow-lg">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm mt-2 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          {formatPeriod(exp.period.start, exp.period.end)}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-white dark:text-white text-sm leading-relaxed font-medium drop-shadow-lg">
                            • {item}
                          </p>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 dark:bg-white/20 rounded-full text-xs text-white dark:text-white font-medium drop-shadow-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                          exp.type === 'part-time' ? 'bg-yellow-500/20 text-yellow-400' :
                          exp.type === 'internship' ? 'bg-blue-500/20 text-blue-400' :
                          exp.type === 'co-op' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {exp.type === 'co-op' ? 'Co-op' : exp.type.charAt(0).toUpperCase() + exp.type.slice(1).replace('-', ' ')}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
} 