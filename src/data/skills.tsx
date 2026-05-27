import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiNodedotjs, SiGit, SiFirebase, SiMongodb,
  SiPython, SiMysql, SiPostgresql, SiExpress, SiDocker,
  SiFlutter, SiGooglecloud, SiR, SiC, SiCplusplus,
  SiGnubash, SiLinux, SiJira, SiTrello, SiJenkins,
  SiStreamlit, SiCss3, SiAmazonwebservices,
} from 'react-icons/si';

import DartIcon from '@/components/DartIcon';
import JavaIcon from '@/components/JavaIcon';
import GoogleCloudIcon from '@/components/GoogleCloudIcon';
import SQLIcon from '@/components/SQLIcon';

// ── Inline SVG icons for tools with no simple-icons entry ──


const VisualStudioIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.583 2.5L9 11.083 4.917 7.5 2.5 8.833v6.334l2.417 1.333L9 12.917l8.583 8.583L21.5 19.25V4.75z" fill="#5C2D91"/>
  </svg>
);

const OfficeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="22" height="18" rx="3" fill="#D83B01"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">O</text>
  </svg>
);

const PowerBIIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2"  y="13" width="5" height="9"  rx="1" fill="#c9a500"/>
    <rect x="9"  y="8"  width="5" height="14" rx="1" fill="#c9a500"/>
    <rect x="16" y="3"  width="5" height="19" rx="1" fill="#c9a500"/>
  </svg>
);

export const CCppIcon = ({ size = 28 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
    <SiC size={size} />
    <SiCplusplus size={size} />
  </div>
);

export interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'mobile';
  size?: number;
}

export const skills: Skill[] = [
  // ── Frontend ──
  { id: 'react',       name: 'React',          icon: SiReact,             color: '#0aade0', category: 'frontend' },
  { id: 'nextjs',      name: 'Next.js',        icon: SiNextdotjs,         color: '#1e3a5f', category: 'frontend' },
  { id: 'typescript',  name: 'TypeScript',     icon: SiTypescript,        color: '#3178C6', category: 'frontend' },
  { id: 'javascript',  name: 'JavaScript',     icon: SiJavascript,        color: '#c9a800', category: 'frontend' },
  { id: 'html',        name: 'HTML',           icon: SiHtml5,             color: '#E34F26', category: 'frontend' },
  { id: 'css',         name: 'CSS',            icon: SiCss3,              color: '#1572B6', category: 'frontend' },
  { id: 'tailwind',    name: 'Tailwind CSS',   icon: SiTailwindcss,       color: '#06B6D4', category: 'frontend' },

  // ── Backend & Languages ──
  { id: 'python',      name: 'Python',         icon: SiPython,            color: '#3776AB', category: 'backend' },
  { id: 'nodejs',      name: 'Node.js',        icon: SiNodedotjs,         color: '#339933', category: 'backend' },
  { id: 'java',        name: 'Java',           icon: JavaIcon,            color: '#ED8B00', category: 'backend', size: 28 },
  { id: 'bash',        name: 'Bash',           icon: SiGnubash,           color: '#4EAA25', category: 'backend' },
  { id: 'sql',         name: 'SQL',            icon: SQLIcon,             color: '#4479A1', category: 'backend' },
  { id: 'ccpp',        name: 'C/C++',          icon: CCppIcon,            color: '#00599C', category: 'backend', size: 24 },
  { id: 'r',           name: 'R',              icon: SiR,                 color: '#276DC3', category: 'backend' },
  { id: 'express',     name: 'Express.js',     icon: SiExpress,           color: '#1e3a5f', category: 'backend' },
  { id: 'streamlit',   name: 'Streamlit',      icon: SiStreamlit,         color: '#FF4B4B', category: 'backend' },

  // ── Databases ──
  { id: 'mongodb',     name: 'MongoDB',        icon: SiMongodb,           color: '#47A248', category: 'backend' },
  { id: 'postgresql',  name: 'PostgreSQL',     icon: SiPostgresql,        color: '#336791', category: 'backend' },
  { id: 'mysql',       name: 'MySQL',          icon: SiMysql,             color: '#00B4DB', category: 'backend', size: 32 },
  { id: 'firebase',    name: 'Firebase',       icon: SiFirebase,          color: '#E27800', category: 'devops' },

  // ── Mobile ──
  { id: 'flutter',     name: 'Flutter',        icon: SiFlutter,           color: '#02569B', category: 'mobile', size: 48 },
  { id: 'dart',        name: 'Dart',           icon: DartIcon,            color: '#0175C2', category: 'mobile', size: 48 },

  // ── Platforms & Tools ──
  { id: 'linux',       name: 'Linux',          icon: SiLinux,             color: '#1e3a5f', category: 'devops' },
  { id: 'git',         name: 'Git',            icon: SiGit,               color: '#F05032', category: 'devops' },
  { id: 'docker',      name: 'Docker',         icon: SiDocker,            color: '#2496ED', category: 'devops', size: 48 },
  { id: 'aws',         name: 'AWS',            icon: SiAmazonwebservices, color: '#FF9900', category: 'devops' },
  { id: 'googlecloud', name: 'Google Cloud',   icon: GoogleCloudIcon,     color: '#4285F4', category: 'devops', size: 56 },
  { id: 'jenkins',     name: 'Jenkins',        icon: SiJenkins,           color: '#D33833', category: 'devops' },
  { id: 'visualstudio',name: 'Visual Studio',  icon: VisualStudioIcon,    color: '#5C2D91', category: 'devops' },

  // ── Productivity ──
  { id: 'jira',        name: 'Jira',           icon: SiJira,              color: '#0052CC', category: 'devops' },
  { id: 'trello',      name: 'Trello',         icon: SiTrello,            color: '#0079BF', category: 'devops' },
  { id: 'office',      name: 'MS Office',      icon: OfficeIcon,          color: '#D83B01', category: 'devops' },
  { id: 'powerbi',     name: 'Power BI',       icon: PowerBIIcon,         color: '#c9a500', category: 'devops' },
];
