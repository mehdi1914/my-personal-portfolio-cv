import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import BackgroundEffects from './BackgroundEffects';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  variant?: 'default' | 'gradient';
}

export default function Section({ 
  children, 
  className,
  containerClassName,
  variant = 'default',
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-24",
        variant === 'gradient' && "bg-black",
        className
      )}
      {...props}
    >
      <BackgroundEffects />
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}