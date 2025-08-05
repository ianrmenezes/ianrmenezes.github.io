import React from 'react';

interface PythonIconProps {
  className?: string;
  size?: number;
}

export default function PythonIcon({ className = "w-5 h-5", size = 20 }: PythonIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official Python Logo - Exact from image */}
      <g>
        {/* Blue Snake (top) - head on left, facing left */}
        <path
          d="M5 6C5 5 6 4 7 4H9C10 4 11 5 11 6V8C11 9 10 10 9 10H7C6 10 5 9 5 8V6Z"
          fill="#3776AB"
        />
        <path
          d="M7 8C7 7 8 6 9 6H11C12 6 13 7 13 8V10C13 11 12 12 11 12H9C8 12 7 11 7 10V8Z"
          fill="#3776AB"
        />
        <path
          d="M9 10C9 9 10 8 11 8H13C14 8 15 9 15 10V12C15 13 14 14 13 14H11C10 14 9 13 9 12V10Z"
          fill="#3776AB"
        />
        <path
          d="M11 12C11 11 12 10 13 10H15C16 10 17 11 17 12V14C17 15 16 16 15 16H13C12 16 11 15 11 14V12Z"
          fill="#3776AB"
        />
        <path
          d="M13 14C13 13 14 12 15 12H17C18 12 19 13 19 14V16C19 17 18 18 17 18H15C14 18 13 17 13 16V14Z"
          fill="#3776AB"
        />
        
        {/* Yellow Snake (bottom) - head on right, facing right */}
        <path
          d="M19 16C19 15 18 14 17 14H15C14 14 13 15 13 16V18C13 19 14 20 15 20H17C18 20 19 19 19 18V16Z"
          fill="#FFD43B"
        />
        <path
          d="M17 14C17 13 16 12 15 12H13C12 12 11 13 11 14V16C11 17 12 18 13 18H15C16 18 17 17 17 16V14Z"
          fill="#FFD43B"
        />
        <path
          d="M15 12C15 11 14 10 13 10H11C10 10 9 11 9 12V14C9 15 10 16 11 16H13C14 16 15 15 15 14V12Z"
          fill="#FFD43B"
        />
        <path
          d="M13 10C13 9 12 8 11 8H9C8 8 7 9 7 10V12C7 13 8 14 9 14H11C12 14 13 13 13 12V10Z"
          fill="#FFD43B"
        />
        <path
          d="M11 8C11 7 10 6 9 6H7C6 6 5 7 5 8V10C5 11 6 12 7 12H9C10 12 11 11 11 10V8Z"
          fill="#FFD43B"
        />
        
        {/* Snake Eyes */}
        <circle cx="6" cy="7" r="0.5" fill="white" />
        <circle cx="18" cy="17" r="0.5" fill="white" />
      </g>
    </svg>
  );
} 