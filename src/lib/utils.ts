import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  });
}

export function formatPeriod(start: string, end?: string): string {
  const startDate = formatDate(start);
  const endDate = end ? formatDate(end) : 'Present';
  return `${startDate} - ${endDate}`;
}

export function getProjectStats(projects: any[]) {
  const total = projects.length;
  const completed = projects.filter(p => p.status === 'completed').length;
  const ongoing = projects.filter(p => p.status === 'ongoing').length;
  const personal = projects.filter(p => p.type === 'personal').length;
  const group = projects.filter(p => p.type === 'group').length;
  const academic = projects.filter(p => p.type === 'academic').length;

  return {
    total,
    completed,
    ongoing,
    personal,
    group,
    academic
  };
}

// Improved smooth scrolling utility
export function smoothScrollTo(targetPosition: number, duration: number = 300): Promise<void> {
  return new Promise((resolve) => {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    
    if (Math.abs(distance) < 10) {
      resolve();
      return;
    }

    let start: number | null = null;
    
    const animateScroll = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Improved easing function
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -8 * progress);
      
      const newPosition = startPosition + distance * easeOutExpo;
      
      // Use scrollTo with options for better compatibility
      window.scrollTo({
        top: newPosition,
        behavior: 'auto' // Use 'auto' to avoid conflicts with native smooth scroll
      });
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        // Ensure exact target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto'
        });
        resolve();
      }
    };
    
    requestAnimationFrame(animateScroll);
  });
}

// Utility to get element position with offset
export function getElementPosition(elementId: string, offset: number = 80): number {
  const element = document.getElementById(elementId);
  if (!element) return 0;
  
  const elementRect = element.getBoundingClientRect();
  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = elementRect.top + startPosition;
  
  return elementTop - offset;
} 