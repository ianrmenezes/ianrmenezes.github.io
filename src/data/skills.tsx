import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiFlutter,
  SiGooglecloud,
  SiR,
  SiC,
  SiCplusplus
} from 'react-icons/si';

import DartIcon from '@/components/DartIcon';
import JavaIcon from '@/components/JavaIcon';
import GoogleCloudIcon from '@/components/GoogleCloudIcon';

// ────────────────────────────────────────────────────────────────────────────────
//  Custom helper icons
// ────────────────────────────────────────────────────────────────────────────────

// Official C and C++ marks side‑by‑side in one compact component
// after combining SiC + SiCplusplus.
export const CCppIcon = ({ size = 28 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
    <SiC size={size} />
    <SiCplusplus size={size} />
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────
//  Types
// ────────────────────────────────────────────────────────────────────────────────
export interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'mobile';
  size?: number; // optional override so big logos can breathe
}

// ────────────────────────────────────────────────────────────────────────────────
//  Master skill list
// ────────────────────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Front‑end
  { id: 'react',        name: 'React',         icon: SiReact,       color: '#61DAFB', category: 'frontend' },
  { id: 'nextjs',       name: 'Next.js',       icon: SiNextdotjs,   color: '#FFFFFF', category: 'frontend' },
  { id: 'typescript',   name: 'TypeScript',    icon: SiTypescript,  color: '#3178C6', category: 'frontend' },
  { id: 'javascript',   name: 'JavaScript',    icon: SiJavascript,  color: '#F7DF1E', category: 'frontend' },
  { id: 'html',         name: 'HTML',          icon: SiHtml5,       color: '#E34F26', category: 'frontend' },
  { id: 'tailwindcss',  name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },

  // Back‑end
  { id: 'nodejs',       name: 'Node.js',       icon: SiNodedotjs,   color: '#339933', category: 'backend' },
  { id: 'python',       name: 'Python',        icon: SiPython,      color: '#3776AB', category: 'backend' },
  { id: 'java',         name: 'Java',          icon: JavaIcon,      color: '#ED8B00', category: 'backend', size: 28 },
  { id: 'mysql',        name: 'MySQL',         icon: SiMysql,       color: '#00B4DB', category: 'backend', size: 32 },
  { id: 'express',      name: 'Express.js',    icon: SiExpress,     color: '#FFFFFF', category: 'backend' },
  { id: 'ccpp',         name: 'C/C++',         icon: CCppIcon,      color: '#00599C', category: 'backend', size: 24 },
  { id: 'r',            name: 'R',             icon: SiR,           color: '#276DC3', category: 'backend' },
  { id: 'mongodb',      name: 'MongoDB',       icon: SiMongodb,     color: '#47A248', category: 'backend' },
  { id: 'postgresql',   name: 'PostgreSQL',    icon: SiPostgresql,  color: '#336791', category: 'backend' },

  // Mobile
  { id: 'flutter',      name: 'Flutter',       icon: SiFlutter,     color: '#02569B', category: 'mobile', size: 48 },
  { id: 'dart',         name: 'Dart',          icon: DartIcon,      color: '#0175C2', category: 'mobile', size: 48 },

  // DevOps
  { id: 'git',          name: 'Git',           icon: SiGit,         color: '#F05032', category: 'devops' },
  { id: 'docker',       name: 'Docker',        icon: SiDocker,      color: '#2496ED', category: 'devops', size: 48 },

  // Cloud
  { id: 'firebase',     name: 'Firebase',      icon: SiFirebase,    color: '#FFCA28', category: 'devops' },
  { id: 'googlecloud',  name: 'Google Cloud',  icon: GoogleCloudIcon, color: '#4285F4', category: 'devops', size: 56 },
];
