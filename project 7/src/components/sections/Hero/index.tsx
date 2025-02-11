import React from 'react';
import Container from '@/components/ui/Container';
import HeroContent from './HeroContent';
import SplineViewer from './SplineViewer';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <SplineViewer />
      
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-20" />

      {/* Content */}
      <Container className="relative z-30 pt-32 pb-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)]">
          <HeroContent />
        </div>
      </Container>
    </div>
  );
}