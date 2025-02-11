import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-6", className)}>
      {children}
    </div>
  );
}