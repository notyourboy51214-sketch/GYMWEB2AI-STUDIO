import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration = 1800,
  decimals = 0,
  suffix = '',
  prefix = ''
}) => {
  const [value, setValue] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(easedProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <span ref={elementRef} className="tabular-nums font-mono">
      {prefix}{formatted}{suffix}
    </span>
  );
};
