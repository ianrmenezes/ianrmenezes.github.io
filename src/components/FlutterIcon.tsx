import React from 'react';

interface FlutterIconProps {
  className?: string;
  size?: number;
}

export default function FlutterIcon({ className = "w-5 h-5", size = 20 }: FlutterIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flutter Logo - F with wings */}
      <path
        d="M14.314 0L2.3 12.002l3.702 3.7L14.314 3.7 18.016 7.4l-3.702 3.7 3.702 3.7-3.702 3.7L2.3 12.002 14.314 0z"
        fill="#02569B"
      />
      
      {/* Flutter text */}
      <text
        x="12"
        y="20"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        Flutter
      </text>
    </svg>
  );
} 