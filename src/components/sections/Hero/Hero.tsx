import React from 'react';
import Container from '@/components/ui/Container';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 animate-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow [animation-delay:1s]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <Container className="relative z-20">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <HeroContent />
          </div>
        </div>
      </Container>
    </div>
  );
}