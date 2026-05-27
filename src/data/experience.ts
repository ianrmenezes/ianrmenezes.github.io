// ────────────────────────────────────────────────────────────────────────────────
//  WORK EXPERIENCE DATA - Your professional background
// ────────────────────────────────────────────────────────────────────────────────
// This file defines all your work experiences that appear in the Experience timeline

// TypeScript interface defining the structure of each work experience
export interface Experience {
  id: string;                   // Unique identifier (e.g., 'blinkcomkw')
  title: string;                // Job title (e.g., 'Software Developer')
  company: string;              // Company name (e.g., 'Blink Gaming Gadgets')
  location: string;             // Work location (e.g., 'Kuwait City, Kuwait')
  period: {                     // Employment duration
    start: string;              // Start date (YYYY-MM format)
    end?: string;               // End date (optional, undefined = current job)
  };
  description: string[];        // Array of bullet points describing your work
  tech: string[];               // Technologies/skills used in this role
  type: 'full-time' | 'part-time' | 'internship' | 'co-op' | 'freelance';  // Employment type
}

// ────────────────────────────────────────────────────────────────────────────────
//  YOUR WORK EXPERIENCES - Listed from most recent to oldest
// ────────────────────────────────────────────────────────────────────────────────
// Add new work experiences at the top of this array

export const experience: Experience[] = [
  {
    id: 'blink',
    title: 'Software Developer',
    company: 'Blink Gaming Gadgets',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: { start: '2025-06', end: '2025-08' },
    description: [
      'Built a React/Node.js internal web app that cut manual inventory tracking time by 40%.',
      'Refined REST APIs and resolved PostgreSQL integration bugs to improve data synchronization.',
      'Built responsive UI components using Tailwind/TypeScript to ensure cross-device compatibility.',
      'Reduced page load times by 25% by optimizing component rendering based on code reviews.',
    ],
    tech: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL', 'Python'],
    type: 'co-op',
  },
  {
    id: 'ikea',
    title: 'Technical Support and IT Operations Intern',
    company: 'IKEA',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: { start: '2024-05', end: '2024-08' },
    description: [
      'Resolved 150+ hardware and network tickets, minimizing operational downtime across departments.',
      'Configured and deployed workstations and software to support employees across retail departments.',
      'Managed internal web portal updates using HTML/CSS to improve resource accessibility for staff.',
      'Maintained company databases via SQL to ensure data integrity and efficient record retrieval.',
    ],
    tech: ['Technical Support', 'Networking', 'Hardware Configuration', 'HTML/CSS', 'SQL'],
    type: 'internship',
  },
  {
    id: 'marriott',
    title: 'Data Analyst Intern',
    company: 'Marriott International',
    location: 'Kuwait City, Al Asimah, Kuwait',
    period: { start: '2023-05', end: '2023-08' },
    description: [
      'Built 5+ Excel dashboards with pivot tables and VLOOKUP, adopted by 3 department leads weekly.',
      'Cut report generation time by 50% by automating recurring data pulls into self-serve dashboards.',
      'Cleaned and organized operational data across departments to ensure accuracy and consistency.',
      'Analyzed guest and inventory data to identify trends and delivered findings to department leads.',
    ],
    tech: ['Data Analysis', 'Excel', 'Pivot Tables', 'Reporting', 'SQL'],
    type: 'internship',
  },
]; 