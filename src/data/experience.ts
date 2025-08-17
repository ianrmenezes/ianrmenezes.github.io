export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: {
    start: string;
    end?: string;
  };
  description: string[];
  tech: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'co-op' | 'freelance';
}

export const experience: Experience[] = [
  {
    id: 'blinkcomkw',
    title: 'Software Developer',
    company: 'Blinkcomkw',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: {
      start: '2025-06',
      end: undefined
    },
    description: [
      'Developed an Employee Self-Service (ESS) portal, implementing features and assisting with end-to-end testing of web applications.',
      'Collaborated with team members to design, debug, and enhance software solutions, improving reliability and user experience.',
      'Learned and adapted to team workflows and development processes, gaining insight into project planning, task prioritization, and collaborative software development practices.'
    ],
    tech: ['Web Development', 'Testing', 'Collaborative Development'],
    type: 'co-op'
  },
  {
    id: 'ikea',
    title: 'Technical Support and IT Operations Intern',
    company: 'Inter IKEA Group',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: {
      start: '2024-08',
      end: '2024-09'
    },
    description: [
      'Troubleshot and maintained websites to ensure smooth operation and user accessibility',
      'Configured hardware and software for new devices, enabling efficient setup for new employees',
      'Managed databases to optimize data storage and improve retrieval efficiency.'
    ],
    tech: ['Technical Support', 'Hardware Configuration', 'Database Management', 'Web Design'],
    type: 'internship'
  },
  {
    id: 'marriott',
    title: 'Cross-Departmental Intern',
    company: 'Marriott International',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: {
      start: '2023-05',
      end: '2023-07'
    },
    description: [
      'Completed cross-exposure training at St. Regis, Sheraton – A Luxury Collection Hotel, and Four Points by Sheraton',
      'Gained hands-on experience in various hotel operations and customer service within prestigious hospitality environments',
      'Learned to manage time effectively and coordinate tasks in a fast-paced luxury hotel setting'
    ],
    tech: ['Customer Service', 'Hotel Operations', 'Cross-functional Training', 'Time Management'],
    type: 'internship'
  }
]; 