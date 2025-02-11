import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/40 hover:bg-black/60 transition-all duration-300 border border-white/5 hover:border-purple-500/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <ProjectLinks project={project} />
      </div>
      <ProjectContent project={project} />
    </div>
  );
}

function ProjectLinks({ project }: ProjectCardProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
      <div className="flex gap-4">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Source</span>
        </a>
      </div>
    </div>
  );
}

function ProjectContent({ project }: ProjectCardProps) {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-200 mb-4 group-hover:text-white transition-colors">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={cn(
              "px-3 py-1 rounded-full text-sm",
              "bg-purple-500/20 text-purple-200",
              "group-hover:bg-purple-500/30 group-hover:text-purple-100",
              "transition-colors duration-300"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}