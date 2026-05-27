"use client";

import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { experience } from '@/data/experience';
import { formatPeriod } from '@/lib/utils';

export default function Experience() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  const typeBadgeColor: Record<string, string> = {
    'full-time':  'bg-emerald-100 text-emerald-700',
    'part-time':  'bg-amber-100 text-amber-700',
    'internship': 'bg-blue-100 text-blue-700',
    'co-op':      'bg-orange-100 text-orange-700',
    'freelance':  'bg-purple-100 text-purple-700',
  };

  const typeLabel: Record<string, string> = {
    'full-time':  'Full-time',
    'part-time':  'Part-time',
    'internship': 'Internship',
    'co-op':      'Co-op',
    'freelance':  'Freelance',
  };

  return (
    <section id="experience" ref={ref} className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black text-[#1e3a5f] text-center mb-14"
          >
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-100 rounded-full" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-4 top-6 w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow-sm" />

                  <div className="ml-14 md:ml-16">
                    <motion.div
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="cursor-pointer"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-black text-[#0a2540] mb-1">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#1e3a5f] text-sm font-semibold">
                            <span className="flex items-center gap-1">
                              <Building className="w-3.5 h-3.5" />
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[#1e3a5f] text-xs font-bold whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatPeriod(exp.period.start, exp.period.end)}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2 text-[#0a2540] text-sm leading-relaxed font-semibold">
                            <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/30 border border-white/40 rounded-full text-xs text-[#0a2540] font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Type badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${typeBadgeColor[exp.type] ?? 'bg-gray-100 text-gray-600'}`}>
                        {typeLabel[exp.type] ?? exp.type}
                      </span>
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
