"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, BarChart3 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { projects } from '@/data/projects';
import { getProjectStats } from '@/lib/utils';

type FilterType = 'all' | 'personal' | 'group' | 'academic' | 'completed' | 'ongoing';

export default function Projects() {
  const { ref, isInView } = useInView({ triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  const stats = getProjectStats(projects);
  
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'personal') return project.type === 'personal';
    if (activeFilter === 'group') return project.type === 'group';
    if (activeFilter === 'academic') return project.type === 'academic';
    if (activeFilter === 'completed') return project.status === 'completed';
    if (activeFilter === 'ongoing') return project.status === 'ongoing';
    return true;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Personal', value: 'personal' },
    { label: 'Group', value: 'group' },
    { label: 'Academic', value: 'academic' },
    { label: 'Completed', value: 'completed' },
    { label: 'Ongoing', value: 'ongoing' },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8"
          >
            Projects
          </motion.h2>

          {/* Filter and Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12"
          >
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full font-medium hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transform transition-transform duration-100 text-sm ${
                    activeFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-black/30 text-black dark:text-white hover:bg-black/50 dark:hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Stats:</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{stats.total} Total</span>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <span>{stats.completed} Completed</span>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <span>{stats.ongoing} In Progress</span>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <span>{stats.personal} Personal</span>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <span>{stats.group} Group</span>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-black/20 backdrop-blur-sm border border-black/20 rounded-xl overflow-hidden hover:bg-black/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] cursor-pointer transform transition-transform duration-100"
              >
                       {/* Project Image */}
                       <div className="aspect-video relative overflow-hidden">
                         {/* Real Project Images */}
                         <img 
                           src={project.id === 'alertmate' ? 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&crop=center' :
                                                                 project.id === 'wordz' ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=center' :
                                project.id === 'weather-app' ? 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop&crop=center' :
                                project.id === 'tracknext' ? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop&crop=center' :
                                                                 project.id === 'grade-calculator' ? 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=450&fit=crop&crop=center' :
                                project.id === 'travel-food-blog' ? 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop&crop=center' :
                                project.id === 'todoflow' ? 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&crop=center' :
                                'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=center'}
                           alt={`${project.title} screenshot`}
                           className="w-full h-full object-cover"
                         />
                         
                         {/* Dark Overlay for Better Text Readability */}
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                         
                         {/* Status Badge */}
                         <div className="absolute top-4 right-4">
                           <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                             project.status === 'completed'
                               ? 'bg-green-500/90 text-white'
                               : 'bg-yellow-500/90 text-white'
                           }`}>
                             {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                           </span>
                         </div>
                       </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/30 dark:bg-white/10 rounded text-xs text-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-black/30 dark:bg-white/10 rounded-lg text-sm text-black dark:text-white hover:bg-black/50 dark:hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-100"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {(project.links.live || project.links.demo) && (
                      <a
                        href={project.links.live || project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 dark:bg-blue-500/20 rounded-lg text-sm text-blue-700 dark:text-blue-400 hover:bg-blue-600/30 dark:hover:bg-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-100"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.links.live ? 'Live' : 'Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 