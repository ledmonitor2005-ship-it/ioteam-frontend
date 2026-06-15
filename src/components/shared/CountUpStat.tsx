import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useReducedMotion, animate } from 'framer-motion';

interface CountUpStatProps {
  value: number;
  decimals?: number;
}

export function CountUpStat({ value, decimals = 0 }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const formatVietnameseValue = (val: number): string => {
    return val.toFixed(decimals).replace('.', ',');
  };

  const [displayValue, setDisplayValue] = useState(() => 
    prefersReducedMotion ? formatVietnameseValue(value) : formatVietnameseValue(0)
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(formatVietnameseValue(value));
      return;
    }

    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(formatVietnameseValue(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals, count, prefersReducedMotion]);

  return (
    <span 
      ref={ref} 
      className="font-mono tabular-nums tracking-tight"
      aria-live="polite"
      aria-label={formatVietnameseValue(value)}
    >
      {displayValue}
    </span>
  );
}
