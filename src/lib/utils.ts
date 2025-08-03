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