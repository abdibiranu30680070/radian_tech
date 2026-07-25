import React from 'react';
import { cn } from '../../lib/cn';

export function Button({ as: Component = 'button', variant = 'primary', size = 'md', className, children, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:scale-105 focus:ring-primary',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  };
  
  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
