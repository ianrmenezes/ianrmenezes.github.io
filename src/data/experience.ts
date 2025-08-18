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
  // ── CURRENT POSITION ──
  {
    id: 'blinkcomkw',                                           // Unique identifier
    title: 'Software Developer',                               // Your job title
    company: 'Blinkcomkw',                                     // Company name (also known as Blink Gaming Gadgets)
    location: 'Kuwait City, Al Asimah, Kuwait',                // Work location
    period: {
      start: '2025-06',                                         // Start date (June 2025)
      end: undefined                                            // Current job (no end date)
    },
    description: [                                              // Your key responsibilities and achievements
      'Developed an Employee Self-Service (ESS) portal, implementing features and assisting with end-to-end testing of web applications.',
      'Collaborated with team members to design, debug, and enhance software solutions, improving reliability and user experience.',
      'Learned and adapted to team workflows and development processes, gaining insight into project planning, task prioritization, and collaborative software development practices.'
    ],
    tech: ['Web Development', 'Testing', 'Collaborative Development'],  // Skills/technologies used
    type: 'co-op'                                              // Employment type
  },
  // ── IKEA INTERNSHIP ──
  {
    id: 'ikea',                                                 // Unique identifier
    title: 'Technical Support and IT Operations Intern',       // Internship title
    company: 'Inter IKEA Group',                               // IKEA's parent company
    location: 'Kuwait City, Al Asimah, Kuwait',                // Internship location
    period: {
      start: '2024-08',                                         // August 2024
      end: '2024-09'                                            // September 2024 (1-month internship)
    },
    description: [                                              // What you accomplished during the internship
      'Troubleshot and maintained websites to ensure smooth operation and user accessibility',
      'Configured hardware and software for new devices, enabling efficient setup for new employees',
      'Managed databases to optimize data storage and improve retrieval efficiency.'
    ],
    tech: ['Technical Support', 'Hardware Configuration', 'Database Management', 'Web Design'],  // Skills gained
    type: 'internship'                                          // Employment type
  },
  // ── MARRIOTT INTERNSHIP ──
  {
    id: 'marriott',                                             // Unique identifier
    title: 'Cross-Departmental Intern',                        // Internship title
    company: 'Marriott International',                         // Global hotel chain
    location: 'Kuwait City, Al Asimah, Kuwait',                // Internship location
    period: {
      start: '2023-05',                                         // May 2023
      end: '2023-07'                                            // July 2023 (3-month internship)
    },
    description: [                                              // Your internship experience
      'Completed cross-exposure training at St. Regis, Sheraton – A Luxury Collection Hotel, and Four Points by Sheraton',
      'Gained hands-on experience in various hotel operations and customer service within prestigious hospitality environments',
      'Learned to manage time effectively and coordinate tasks in a fast-paced luxury hotel setting'
    ],
    tech: ['Customer Service', 'Hotel Operations', 'Cross-functional Training', 'Time Management'],  // Soft skills developed
    type: 'internship'                                          // Employment type
  }
]; 