import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';
import GlowingTitle from './hero/GlowingTitle';
import SocialLinks from './hero/SocialLinks';
import ActionButtons from './hero/ActionButtons';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <GlowingTitle />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay">
              UX/UI Design & Frontend Development | Building Founder-Focused Digital Experiences
            </p>

            <ActionButtons />
            <SocialLinks />
          </div>
        </div>
      </Container>
    </div>
  );
}