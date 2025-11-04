'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  value: number;
  direction?: 'up' | 'down';
  delay?: number; // delay in s
  decimalPlaces?: number;
  duration?: number; // duration in seconds
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  duration = 0.2, // default duration of 2 seconds
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60, // Reduced from 60 for slower motion
    stiffness: 300, // Reduced from 100 for slower motion
    duration: duration, // Convert seconds to milliseconds
    bounce: 0.1, // Slight bounce for visual appeal
  });
  const isInView = useInView(ref, {
    once: true,
    margin: '0px',
    amount: 'some',
  });

  useEffect(() => {
    if (isInView) {
      // Add a small delay before starting the animation
      const timer = setTimeout(() => {
        // Use a slower transition
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction, duration]);

  useEffect(() => {
    let prevValue = 0;

    return springValue.on('change', (latest) => {
      if (ref.current) {
        // Ensure the number changes smoothly
        const currentValue = Number(latest.toFixed(decimalPlaces));
        if (Math.abs(currentValue - prevValue) >= 1 || currentValue === value) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(currentValue);
          prevValue = currentValue;
        }
      }
    });
  }, [springValue, decimalPlaces, value]);

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tabular-nums tracking-wider text-black dark:text-white transition-opacity duration-300',
        isInView ? 'opacity-100' : 'opacity-0',
        className
      )}
      {...props}
    >
      {direction === 'down' ? value : 0}
    </span>
  );
}
