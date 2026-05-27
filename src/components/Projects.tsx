"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { projects } from '@/data/projects';
import { getProjectStats } from '@/lib/utils';
import { BubbleWrapper } from '@/components/BubbleWrapper';

type FilterType = 'all' | 'personal' | 'group' | 'academic' | 'completed' | 'ongoing';

const IMAGE_MAP: Record<string, string> = {
  'footybuzz':        '/footybuzz.jpg',
  'flappy-bird':      '/flappy-bird.jpeg',
  'arkhive':          '/arkhive.jpeg',
  'alertmate':        '/alertmate.jpg',
  'wordz':            '/wordz.png',
  'weather-app':      '/weather-app.png',
  'tracknext':        '/tracknext.png',
  'grade-calculator': '/gradecalc.png',
  'travel-food-blog': '/travel-food-blog.png',
  'todoflow':         '/todoflow.png',
};

export default function Projects() {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const stats = getProjectStats(projects);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all')       return true;
    if (activeFilter === 'personal')  return p.type === 'personal';
    if (activeFilter === 'group')     return p.type === 'group';
    if (activeFilter === 'academic')  return p.type === 'academic';
    if (activeFilter === 'completed') return p.status === 'completed';
    if (activeFilter === 'ongoing')   return p.status === 'ongoing';
    return true;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All',       value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Ongoing',   value: 'ongoing' },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black text-[#1e3a5f] text-center mb-10"
          >
            Projects
          </motion.h2>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { label: 'Total',      value: stats.total },
              { label: 'Completed',  value: stats.completed },
              { label: 'In Progress',value: stats.ongoing },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 px-4 py-1.5 bg-white/60 rounded-full border border-blue-100 text-[#4a7fa5] text-sm font-bold">
                <span className="text-[#1e3a5f]">{s.value}</span> {s.label}
              </div>
            ))}
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {filters.map((f) => (
              <BubbleWrapper key={f.value}>
                <button
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-colors duration-150 cursor-pointer ${
                    activeFilter === f.value
                      ? 'bg-[#5b8fa8] text-white shadow-md'
                      : 'bg-white/70 border-2 border-blue-100 text-[#1e3a5f] hover:bg-white'
                  }`}
                >
                  {f.label}
                </button>
              </BubbleWrapper>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-3xl overflow-hidden"
                >
                  {/* Image */}
                  <div className={`aspect-video relative overflow-hidden ${
                    project.id === 'alertmate' ? 'bg-black' :
                    project.id === 'arkhive' ? 'bg-white' : ''
                  }`}>
                    <img
                      src={IMAGE_MAP[project.id] ?? ''}
                      alt={`${project.title} screenshot`}
                      style={
                        project.id === 'alertmate'   ? { objectPosition: 'center 48%' } :
                        project.id === 'flappy-bird' ? { objectPosition: 'center 10%' } :
                        undefined
                      }
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                        project.id === 'arkhive'   ? 'object-contain scale-90' :
                        project.id === 'alertmate' ? 'object-cover' :
                        'object-cover object-top'
                      }`}
                    />
                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/0 transition-colors duration-300" />

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        project.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {project.status === 'completed' ? '✓ Completed' : '⏳ Ongoing'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#0a2540] mb-1.5 group-hover:text-[#1e3a5f] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#0a2540] text-sm leading-relaxed font-semibold mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-white/30 border border-white/40 rounded-full text-xs text-[#0a2540] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.links.repo && (
                        <BubbleWrapper>
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-white/30 border border-white/50 rounded-full text-xs font-bold text-[#0a2540] hover:bg-white/50 transition-colors duration-150"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        </BubbleWrapper>
                      )}
                      {(project.links.live || project.links.demo) && (
                        <BubbleWrapper>
                          <a
                            href={project.links.live ?? project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-[#0a2540]/70 border border-white/30 rounded-full text-xs font-bold text-white hover:bg-[#0a2540]/90 transition-colors duration-150"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {project.links.live ? 'Live' : 'Demo'}
                          </a>
                        </BubbleWrapper>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
