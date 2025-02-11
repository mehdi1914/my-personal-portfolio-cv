import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from './ProjectGrid';

export default function Portfolio() {
  return (
    <Section className="bg-gradient-to-b from-black to-purple-950/20" id="portfolio">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A showcase of my recent work and experiments"
      />
      <ProjectGrid />
    </Section>
  );
}