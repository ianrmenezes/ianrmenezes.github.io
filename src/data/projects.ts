// ────────────────────────────────────────────────────────────────────────────────
//  PROJECTS DATA - Your portfolio projects
// ────────────────────────────────────────────────────────────────────────────────
// This file defines all your projects that appear in the Projects section
// Images should be placed in the public/ folder

// TypeScript interface defining the structure of each project
export interface Project {
  id: string;                                   // Unique identifier (e.g., 'alertmate')
  title: string;                                // Project name (e.g., 'AlertMate')
  description: string;                          // Brief description of what the project does
  thumbnail: string;                            // Image path (e.g., '/alertmate.jpg')
  tech: string[];                               // Technologies used (e.g., ['React', 'Node.js'])
  status: 'completed' | 'ongoing';              // Current status of the project
  type: 'personal' | 'group' | 'academic';     // Project category
  links: {                                      // External links
    repo?: string;                              // GitHub repository (optional)
    live?: string;                              // Live demo URL (optional)
    demo?: string;                              // Demo video URL (optional)
  };
  featured?: boolean;                           // Whether to highlight this project (optional)
}

// ────────────────────────────────────────────────────────────────────────────────
//  YOUR PROJECTS - Add new projects at the top
// ────────────────────────────────────────────────────────────────────────────────
// Projects are displayed in the order they appear in this array

export const projects: Project[] = [
  {
    id: 'footybuzz',
    title: 'FootyBuzz',
    description: 'A real-time 12-league soccer dashboard unifying live scores and standings in a single view, with multi-layer caching for sub-200ms loads, team profile pages, a persistent favorites tracker, and a fully responsive mobile UI.',
    thumbnail: '/footybuzz.jpg',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    status: 'completed',
    type: 'personal',
    links: { repo: 'https://github.com/ianrmenezes/FootyBuzz', live: 'https://footybuzz.vercel.app' },
    featured: true,
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird Game',
    description: 'A Flappy Bird clone built to master real-time game loop architecture and collision physics, featuring collision detection, score tracking, game-over logic, and smooth responsive controls.',
    thumbnail: '/flappy-bird.jpeg',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    status: 'completed',
    type: 'personal',
    links: { repo: 'https://github.com/ianrmenezes/flappy-bird', live: 'https://ianrmenezes.github.io/flappy-bird/' },
    featured: true,
  },
  {
    id: 'arkhive',
    title: 'Arkhive',
    description: 'A search platform for 1945 U.S. newspaper archives built to accelerate historical propaganda analysis, powered by a TF-IDF and Logistic Regression ML pipeline to classify article text with a searchable web interface.',
    thumbnail: '/arkhive.jpeg',
    tech: ['JavaScript', 'HTML', 'CSS', 'Python', 'SQL', 'TF-IDF', 'Logistic Regression'],
    status: 'completed',
    type: 'academic',
    links: { repo: 'https://github.com/ianrmenezes/Arkhive_' },
    featured: true,
  },
  {
    id: 'alertmate',
    title: 'AlertMate',
    description: 'Neighborhood Safety Network (AlertMate) is a community-driven safety app designed to report suspicious activities, access emergency resources, and stay informed about potential threats.',
    thumbnail: '/alertmate.jpg',
    tech: ['Flutter', 'Firebase', 'Google Cloud Platform'],
    status: 'completed',
    type: 'group',
    links: {
      repo: 'https://github.com/ianrmenezes/AlertMate'
    },
    featured: true
  },
  {
    id: 'wordz',
    title: 'Wordz',
    description: 'A real-time multiplayer spelling bee game where players take turns spelling words correctly to earn points! Challenge your friends and improve your spelling skills in this fun, educational web application.',
    thumbnail: '/wordz.png',
    tech: ['Next.js', 'MongoDB', 'Express.js', 'Railway/Heroku'],
    status: 'ongoing',
    type: 'group',
    links: {
      repo: 'https://github.com/ianrmenezes/Wordz'
    },
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A beautiful and interactive weather application built with Python and Streamlit that provides current weather conditions and forecasts for any city around the world.',
    thumbnail: '/weather-app.png',
    tech: ['Python', 'Streamlit', 'OpenWeather API', 'Plotly', 'Folium'],
    status: 'completed',
    type: 'personal',
    links: {
      repo: 'https://github.com/ianrmenezes/Weather-App',
      live: 'https://weather-app-erachaxm6d22gb6axgh4wd.streamlit.app'
    },
    featured: true
  },
  {
    id: 'tracknext',
    title: 'TrackNext',
    description: 'TrackNext helps you build better habits and achieve your goals by tracking your daily progress in a simple, organized way.',
    thumbnail: '/tracknext.png',
    tech: ['JavaScript', 'Python', 'CSS', 'HTML'],
    status: 'ongoing',
    type: 'personal',
    links: {
      repo: 'https://github.com/ianrmenezes/TrackNext'
    },
    featured: true
  },
  {
    id: 'grade-calculator',
    title: 'Grade Calculator',
    description: 'A modern, clean, and responsive web application for calculating weighted grades with real-time updates and visual feedback.',
    thumbnail: '/gradecalc.png',
    tech: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Chart.js'],
    status: 'completed',
    type: 'personal',
    links: {
      repo: 'https://github.com/ianrmenezes/grade-calculator',
      live: 'https://ianrmenezes.github.io/grade-calculator/'
    },
    featured: true
  },
  {
    id: 'travel-food-blog',
    title: 'Travel-Food-Blog',
    description: 'A personal blog sharing travel stories and food experiences from around the world.',
    thumbnail: '/travel-food-blog.png',
    tech: ['HTML', 'CSS'],
    status: 'ongoing',
    type: 'personal',
    links: {
      repo: 'https://github.com/ianrmenezes/travel-food-blog'
    },
    featured: true
  },
  {
    id: 'todoflow',
    title: 'TodoFlow',
    description: 'A modern todo list application with glassmorphism design and dark/light mode toggle.',
    thumbnail: '/todoflow.png',
    tech: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS'],
    status: 'completed',
    type: 'personal',
    links: {
      repo: 'https://github.com/ianrmenezes/TodoFlow',
      live: 'https://ianrmenezes.github.io/TodoFlow'
    },
    featured: true
  }
]; 