import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id,
  background = 'white' 
}) => {
  const backgrounds = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-gradient-primary',
    dark: 'bg-gray-900',
  };
  
  return (
    <section 
      id={id}
      className={cn('section-padding', backgrounds[background], className)}
    >
      {children}
    </section>
  );
};

export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}> = ({ title, subtitle, description, className }) => {
  return (
    <div className={cn('text-center mb-12 sm:mb-16 2xl:mb-20 max-w-3xl 2xl:max-w-4xl mx-auto px-4', className)}>
      {subtitle && (
        <span className="inline-block text-[#0184fa] dark:text-[#38a0ff] bg-[#0184fa]/10 dark:bg-[#0184fa]/20 border border-[#0184fa]/20 px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 shadow-sm">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg 2xl:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
