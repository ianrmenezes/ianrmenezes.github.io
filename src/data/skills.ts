import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiFirebase
} from 'react-icons/si';

export interface Skill {
  id: string;
  name: string;
  icon: any;
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'mobile';
}

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', icon: SiReact, category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
  { id: 'html', name: 'HTML', icon: SiHtml5, category: 'frontend' },
  { id: 'css', name: 'CSS', icon: SiCss3, category: 'frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
  { id: 'python', name: 'Python', icon: SiPython, category: 'backend' },
  
  // DevOps
  { id: 'git', name: 'Git', icon: SiGit, category: 'devops' },
  { id: 'github', name: 'GitHub', icon: SiGithub, category: 'devops' },
  
  // Cloud
  { id: 'firebase', name: 'Firebase', icon: SiFirebase, category: 'backend' },
]; 