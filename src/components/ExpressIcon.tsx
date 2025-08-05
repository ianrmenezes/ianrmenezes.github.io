import React from 'react';

interface ExpressIconProps {
  className?: string;
  size?: number;
}

export default function ExpressIcon({ className = "w-5 h-5", size = 20 }: ExpressIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Express.js Logo */}
      <path
        d="M24 18.294a7.985 7.985 0 0 1-7.769 7.706c-4.34 0-7.706-3.366-7.706-7.706 0-4.34 3.366-7.706 7.706-7.706a7.985 7.985 0 0 1 7.769 7.706zM0 18.294a7.985 7.985 0 0 0 7.769 7.706c4.34 0 7.706-3.366 7.706-7.706 0-4.34-3.366-7.706-7.706-7.706A7.985 7.985 0 0 0 0 18.294z"
        fill="#000000"
      />
    </svg>
  );
} 