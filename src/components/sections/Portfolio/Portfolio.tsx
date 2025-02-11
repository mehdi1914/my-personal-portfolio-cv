import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from './data';

export default function Portfolio() {
  return (
    <Section className="bg-gradient-to-b from-black to-purple-950/20" id="portfolio">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A showcase of my recent work and experiments"
      />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}