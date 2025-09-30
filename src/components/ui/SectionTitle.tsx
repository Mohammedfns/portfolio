import { ReactNode } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <RevealOnScroll direction="up" className={`mb-12 ${className}`}>
      <div className={alignmentClasses[align]}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        
        {subtitle && (
          <div className="text-gray-400 max-w-2xl mx-auto">
            {typeof subtitle === 'string' ? <p>{subtitle}</p> : subtitle}
          </div>
        )}
        
        <div className={`h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mt-4 rounded-full ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`} />
      </div>
    </RevealOnScroll>
  );
}

