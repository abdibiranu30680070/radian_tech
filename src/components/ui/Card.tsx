import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6',
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return <div className={cn('mb-4', className)}>{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return (
    <h3 className={cn('text-xl font-bold text-gray-900 dark:text-white', className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return <div className={cn('text-gray-600 dark:text-gray-300', className)}>{children}</div>;
};
