'use client';

import { ReactNode } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string | ReactNode;
  icon?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <RevealOnScroll direction="left" delay={200}>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            )}
          </div>
          {!isLast && <div className="w-0.5 bg-gray-700 h-full mt-2"></div>}
        </div>
        <div className="pb-8">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
            <span className="text-indigo-400 font-medium">{subtitle}</span>
            <span className="text-gray-400 text-sm">{period}</span>
          </div>
          <div className="mt-3 text-gray-300">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="py-4">{children}</div>;
}

