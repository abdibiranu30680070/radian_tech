import React from 'react';
import { cn } from '../../lib/cn';

export function Card({ children, className, hover = true }) {
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
}

export function CardHeader({ children, className }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return (
    <h3 className={cn('text-xl font-bold text-gray-900 dark:text-white', className)}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className }) {
  return <div className={cn('text-gray-600 dark:text-gray-300', className)}>{children}</div>;
}
