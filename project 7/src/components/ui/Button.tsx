import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "rounded-full font-medium transition-all transform hover:scale-105 active:scale-100",
        // Variants
        {
          'bg-purple-600 hover:bg-purple-700 text-white': variant === 'primary',
          'bg-transparent border-2 border-purple-400 text-purple-100 hover:bg-purple-400/10': variant === 'secondary',
          'border-2 border-current': variant === 'outline',
        },
        // Sizes
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}