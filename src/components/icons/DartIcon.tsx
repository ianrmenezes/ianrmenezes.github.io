// components/DartIcon.tsx
import React from 'react';

interface DartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function DartIcon({ size = 24, className, style }: DartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill="#0175C2"
        d="M44.8 44.8L128 0l83.2 44.8 44.8 83.2-44.8 83.2L128 256 44.8 211.2 0 128z"
      />
      <path
        fill="#29B6F6"
        d="M128 0v128L44.8 44.8zM128 256V128l83.2 83.2zM256 128h-128l83.2-83.2zM0 128h128L44.8 211.2z"
      />
    </svg>
  );
}
