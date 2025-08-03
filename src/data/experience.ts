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
      'Developed an ESS portal and contributed to testing web applications as part of a collaborative team',
      'Worked on-site in Kuwait City as part of a co-op program',
      'Collaborated with team members to deliver high-quality software solutions'
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
      'Provided technical support by troubleshooting issues and maintaining web design',
      'Configured hardware and managed databases to ensure smooth operations',
      'Gained hands-on experience in IT operations and technical problem-solving'
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
      'Developed strong customer service skills and understanding of luxury hospitality operations'
    ],
    tech: ['Customer Service', 'Hotel Operations', 'Cross-functional Training'],
    type: 'internship'
  }
]; 