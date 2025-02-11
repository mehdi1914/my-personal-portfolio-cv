import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { projects } from './portfolio/data';
import ProjectCard from './portfolio/ProjectCard';
import Button from '../ui/Button';

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Section className="bg-gradient-to-b from-black to-purple-950/20" id="portfolio">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A showcase of my recent work and experiments"
      />
      
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project}
            className={`animate-fade-in-up [animation-delay:${index * 200}ms]`}
          />
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            View More Projects
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      )}
    </Section>
  );
}