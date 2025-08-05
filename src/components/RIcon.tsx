import React from 'react';

interface RIconProps {
  className?: string;
  size?: number;
}

export default function RIcon({ className = "w-5 h-5", size = 20 }: RIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* R Programming Language Logo */}
      {/* Grey oval ring */}
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="#808080" opacity="0.3" />
      
      {/* Blue R letter */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#276DC3"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        R
      </text>
    </svg>
  );
} 