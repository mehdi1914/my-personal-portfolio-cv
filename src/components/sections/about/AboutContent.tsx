import React from 'react';
import { Code2, Palette, Dumbbell } from 'lucide-react';
import SkillCard from './SkillCard';

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant web applications",
    color: "purple"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    color: "blue"
  },
  {
    icon: Dumbbell,
    title: "Fitness Enthusiast",
    description: "Balancing creativity with physical wellness",
    color: "purple"
  }
] as const;

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate UX/UI Designer and Frontend Developer with a keen eye for detail 
          and a love for creating seamless digital experiences. My journey in the digital 
          world has been driven by the perfect blend of creativity and technical expertise.
        </p>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            {...skill} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}