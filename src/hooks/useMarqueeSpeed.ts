import { useState, useEffect } from 'react';

interface UseMarqueeSpeedOptions {
  baseSpeed?: number;
  pauseOnHover?: boolean;
}

export function useMarqueeSpeed(options: UseMarqueeSpeedOptions = {}) {
  const { baseSpeed = 1, pauseOnHover = true } = options;
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(baseSpeed);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
      setSpeed(0);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
      setSpeed(baseSpeed);
    }
  };

  useEffect(() => {
    setSpeed(baseSpeed);
  }, [baseSpeed]);

  return {
    speed,
    isPaused,
    handleMouseEnter,
    handleMouseLeave,
  };
} 