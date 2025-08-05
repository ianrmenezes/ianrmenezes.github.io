import React from 'react';

interface CIconProps {
  className?: string;
  size?: number;
}

export default function CIcon({ className = "w-5 h-5", size = 20 }: CIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* C++ Logo */}
      {/* Background circle */}
      <circle cx="12" cy="12" r="10" fill="#00599C" />
      
      {/* C++ text */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        C++
      </text>
    </svg>
  );
} 