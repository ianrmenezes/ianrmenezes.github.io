export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  status: 'completed' | 'ongoing';
  type: 'personal' | 'group' | 'academic';
  links: {
    repo?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'alertmate',
    title: 'AlertMate',
    description: 'Neighborhood Safety Network (AlertMate) is a community-driven safety app designed to report suspicious activities, access emergency resources, and stay informed about potential threats.',
    thumbnail: '/images/alertmate-thumb.jpg',
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
    thumbnail: '/images/wordz-thumb.jpg',
    tech: ['Next.js', 'MongoDB', 'Express.js', 'Railway/Heroku'],
    status: 'ongoing',
    type: 'group',
    links: {
      repo: 'https://github.com/ianrmenezes/Wordz',
      live: 'https://www.wordzzz.xyz/'
    },
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A beautiful and interactive weather application built with Python and Streamlit that provides current weather conditions and forecasts for any city around the world.',
    thumbnail: '/images/weather-app-thumb.jpg',
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
    thumbnail: '/images/tracknext-thumb.jpg',
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
    thumbnail: '/images/grade-calculator-thumb.jpg',
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
    thumbnail: '/images/travel-food-blog-thumb.jpg',
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
    description: 'A beautiful, modern todo list application with glassmorphism design and dark/light mode toggle.',
    thumbnail: '/images/todoflow-thumb.jpg',
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