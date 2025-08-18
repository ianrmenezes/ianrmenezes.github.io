// ────────────────────────────────────────────────────────────────────────────────
//  SKILLS DATA - All technologies and tools you know
// ────────────────────────────────────────────────────────────────────────────────
// This file defines all your technical skills that appear in the Skills marquee
// Each skill has an icon, color, category, and optional custom size

// Import icons from Simple Icons (react-icons/si)
import {
  SiReact,        // React JavaScript library
  SiNextdotjs,    // Next.js React framework
  SiTypescript,   // TypeScript programming language
  SiJavascript,   // JavaScript programming language
  SiHtml5,        // HTML5 markup language
  SiTailwindcss,  // Tailwind CSS framework
  SiNodedotjs,    // Node.js runtime
  SiGit,          // Git version control
  SiFirebase,     // Firebase platform
  SiMongodb,      // MongoDB database
  SiPython,       // Python programming language
  SiMysql,        // MySQL database
  SiPostgresql,   // PostgreSQL database
  SiExpress,      // Express.js framework
  SiDocker,       // Docker containerization
  SiFlutter,      // Flutter mobile framework
  SiGooglecloud,  // Google Cloud Platform
  SiR,            // R programming language
  SiC,            // C programming language
  SiCplusplus     // C++ programming language
} from 'react-icons/si';

// Import custom icon components for technologies not available in Simple Icons
import DartIcon from '@/components/DartIcon';           // Custom Dart icon
import JavaIcon from '@/components/JavaIcon';           // Custom Java icon
import GoogleCloudIcon from '@/components/GoogleCloudIcon'; // Custom Google Cloud icon

// ────────────────────────────────────────────────────────────────────────────────
//  CUSTOM COMBINED ICONS
// ────────────────────────────────────────────────────────────────────────────────

// C/C++ combined icon - shows both C and C++ symbols side by side
// This is used because C and C++ are often learned/used together
export const CCppIcon = ({ size = 28 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
    <SiC size={size} />         {/* C programming language symbol */}
    <SiCplusplus size={size} /> {/* C++ programming language symbol */}
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────
//  TYPESCRIPT TYPES
// ────────────────────────────────────────────────────────────────────────────────

// Interface defining the structure of each skill object
export interface Skill {
  id: string;                           // Unique identifier (e.g., 'react', 'python')
  name: string;                         // Display name (e.g., 'React', 'Python')
  icon: React.ComponentType<any>;       // Icon component to render
  color: string;                        // Hex color for the icon (e.g., '#61DAFB')
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'mobile'; // Skill category
  size?: number;                        // Optional custom size (default varies by skill)
}

// ────────────────────────────────────────────────────────────────────────────────
//  ALL YOUR SKILLS - This appears in the Skills marquee
// ────────────────────────────────────────────────────────────────────────────────
// Add new skills here as you learn them!
// Colors are the official brand colors for each technology

export const skills: Skill[] = [
  // ── FRONTEND TECHNOLOGIES ──
  { id: 'react',        name: 'React',         icon: SiReact,       color: '#61DAFB', category: 'frontend' },  // React blue
  { id: 'nextjs',       name: 'Next.js',       icon: SiNextdotjs,   color: '#FFFFFF', category: 'frontend' },  // White for dark theme
  { id: 'typescript',   name: 'TypeScript',    icon: SiTypescript,  color: '#3178C6', category: 'frontend' },  // TypeScript blue
  { id: 'javascript',   name: 'JavaScript',    icon: SiJavascript,  color: '#F7DF1E', category: 'frontend' },  // JavaScript yellow
  { id: 'html',         name: 'HTML',          icon: SiHtml5,       color: '#E34F26', category: 'frontend' },  // HTML orange
  { id: 'tailwindcss',  name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },  // Tailwind cyan

  // ── BACKEND TECHNOLOGIES ──
  { id: 'nodejs',       name: 'Node.js',       icon: SiNodedotjs,   color: '#339933', category: 'backend' },                    // Node.js green
  { id: 'python',       name: 'Python',        icon: SiPython,      color: '#3776AB', category: 'backend' },                    // Python blue
  { id: 'java',         name: 'Java',          icon: JavaIcon,      color: '#ED8B00', category: 'backend', size: 28 },          // Java orange
  { id: 'mysql',        name: 'MySQL',         icon: SiMysql,       color: '#00B4DB', category: 'backend', size: 32 },          // MySQL bright blue
  { id: 'express',      name: 'Express.js',    icon: SiExpress,     color: '#FFFFFF', category: 'backend' },                    // White for dark theme
  { id: 'ccpp',         name: 'C/C++',         icon: CCppIcon,      color: '#00599C', category: 'backend', size: 24 },          // C/C++ blue, smaller size
  { id: 'r',            name: 'R',             icon: SiR,           color: '#276DC3', category: 'backend' },                    // R blue
  { id: 'mongodb',      name: 'MongoDB',       icon: SiMongodb,     color: '#47A248', category: 'backend' },                    // MongoDB green
  { id: 'postgresql',   name: 'PostgreSQL',    icon: SiPostgresql,  color: '#336791', category: 'backend' },                    // PostgreSQL blue

  // ── MOBILE DEVELOPMENT ──
  { id: 'flutter',      name: 'Flutter',       icon: SiFlutter,     color: '#02569B', category: 'mobile', size: 48 },          // Flutter blue, larger size
  { id: 'dart',         name: 'Dart',          icon: DartIcon,      color: '#0175C2', category: 'mobile', size: 48 },          // Dart blue, larger size

  // ── DEVOPS & TOOLS ──
  { id: 'git',          name: 'Git',           icon: SiGit,         color: '#F05032', category: 'devops' },                     // Git orange/red
  { id: 'docker',       name: 'Docker',        icon: SiDocker,      color: '#2496ED', category: 'devops', size: 48 },          // Docker blue, larger size

  // ── CLOUD PLATFORMS ──
  { id: 'firebase',     name: 'Firebase',      icon: SiFirebase,    color: '#FFCA28', category: 'devops' },                    // Firebase yellow
  { id: 'googlecloud',  name: 'Google Cloud',  icon: GoogleCloudIcon, color: '#4285F4', category: 'devops', size: 56 },        // Google blue, largest size
];
