import React from 'react';
import TypewriterText from './TypewriterText';
import SocialLinks from './SocialLinks';
import ActionButtons from './ActionButtons';

export default function HeroContent() {
  return (
    <div className="text-center space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in">
        Hi, I'm <TypewriterText />
      </h1>
      <p className="text-xl md:text-2xl text-purple-200/90 animate-fade-in-delay">
        Building Founder-Focused Digital Experiences
      </p>
      <ActionButtons />
      <SocialLinks />
    </div>
  );
}