import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProjectCard from './ProjectCard';
import { projects } from './data';

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project}
            className={`animate-fade-in-up [animation-delay:${index * 200}ms]`}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setShowAll(!showAll)}
          className="group inline-flex items-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
          {showAll ? (
            <>
              View Less
              <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </>
          ) : (
            <>
              View More Projects
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </>
          )}
        </Button>
      </div>
    </>
  );
}