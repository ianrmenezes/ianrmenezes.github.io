import React from 'react';
import { SiC, SiCplusplus } from 'react-icons/si';

interface CCppIconProps {
  className?: string;
  size?: number;
}

export default function CCppIcon({ className = "w-5 h-5", size = 20 }: CCppIconProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <SiC size={size} />
      <SiCplusplus size={size} />
    </span>
  );
} 