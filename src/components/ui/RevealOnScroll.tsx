'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function RevealOnScroll({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-reveal');
              entry.target.classList.remove('opacity-0');
              
              // Animations de direction
              entry.target.classList.remove('translate-y-10', '-translate-y-10', 'translate-x-10', '-translate-x-10');
            }, delay);
            
            // Arrêter d'observer une fois que l'animation est déclenchée
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  // Déterminer les classes de direction initiales
  let directionClass = '';
  switch (direction) {
    case 'up':
      directionClass = 'translate-y-10';
      break;
    case 'down':
      directionClass = '-translate-y-10';
      break;
    case 'left':
      directionClass = 'translate-x-10';
      break;
    case 'right':
      directionClass = '-translate-x-10';
      break;
    default:
      directionClass = '';
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 transform transition-all duration-700 ease-out ${directionClass} ${className}`}
    >
      {children}
    </div>
  );
}

