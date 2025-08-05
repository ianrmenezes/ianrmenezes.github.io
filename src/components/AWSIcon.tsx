// components/AWSIcon.tsx
import React from 'react';

interface AWSIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AWSIcon({ size = 20, className, style }: AWSIconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L52 2L52 22L12 22Z" fill="#FF9900" />
      <text
        x="32"
        y="17"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        AWS
      </text>
    </svg>
  );
}
