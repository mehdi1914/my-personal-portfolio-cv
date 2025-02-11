import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundEffectsProps {
  variant?: 'hero' | 'section';
  className?: string;
}

export default function BackgroundEffects({ variant = 'section', className }: BackgroundEffectsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Sophisticated Grid */}
      <div 
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]",
          "bg-[size:4rem_4rem]",
          "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        )} 
      />

      {/* Purple Glow Effects */}
      <div className="absolute inset-0">
        {variant === 'hero' ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        )}
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] [background-image:url('/noise.png')]" />
    </div>
  );
}