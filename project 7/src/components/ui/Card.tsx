import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "card-glass",
      "group relative overflow-hidden",
      "hover:shadow-lg hover:shadow-purple-500/10",
      className
    )}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}