import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code2, Palette, Brain, Rocket } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code2, level: 'Expert' },
  { name: 'UI/UX Design', icon: Palette, level: 'Advanced' },
  { name: 'Problem Solving', icon: Brain, level: 'Expert' },
  { name: 'Project Management', icon: Rocket, level: 'Intermediate' }
];

export default function About() {
  return (
    <Section className="bg-gradient-to-b from-black via-purple-950/10 to-black" id="about">
      <SectionHeading 
        title="About Me" 
        subtitle="Passionate about creating seamless digital experiences through design and code"
      />
      
      <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start max-w-6xl mx-auto">
        {/* Content */}
        <div className="space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a creative developer with a passion for building beautiful, functional web experiences. 
              With 5+ years of experience in frontend development and UI/UX design, I specialize in 
              creating responsive, performant applications that users love to interact with.
            </p>
          </div>
          
          {/* Skills */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
            <p className="text-gray-300 italic">
              "I believe in creating digital experiences that not only look beautiful but also solve real problems. 
              Every line of code and every pixel should serve a purpose in enhancing the user's journey."
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-75 blur-xl animate-pulse"></div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=1067"
              alt="Profile"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          </div>
        </div>
      </div>
    </Section>
  );
}