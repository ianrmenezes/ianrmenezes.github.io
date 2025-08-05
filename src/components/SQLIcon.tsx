import React from 'react';

interface SQLIconProps {
  className?: string;
  size?: number;
}

export default function SQLIcon({ className = "w-6 h-6", size = 24 }: SQLIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SQL Database Cylinder */}
      {/* Cylinder base */}
      <ellipse cx="12" cy="18" rx="8" ry="2" fill="#4479A1" />
      
      {/* Cylinder body */}
      <path
        d="M4 18V8C4 6.89543 7.58172 6 12 6C16.4183 6 20 6.89543 20 8V18C20 19.1046 16.4183 20 12 20C7.58172 20 4 19.1046 4 18Z"
        fill="#4479A1"
      />
      
      {/* Cylinder top (lighter shade) */}
      <ellipse cx="12" cy="8" rx="8" ry="2" fill="#5A9BC8" />
      
             {/* SQL text */}
       <text
         x="12"
         y="14"
         textAnchor="middle"
         fill="white"
         fontSize="7"
         fontWeight="bold"
         fontFamily="Arial, sans-serif"
       >
         SQL
       </text>
    </svg>
  );
} 