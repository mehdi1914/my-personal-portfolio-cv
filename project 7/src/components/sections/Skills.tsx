import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { 
  Code2, Palette, Layout, Database, 
  GitBranch, Terminal, Globe, Cpu
} from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: Code2, level: 90 },
      { name: "TypeScript", icon: Terminal, level: 85 },
      { name: "UI/UX Design", icon: Palette, level: 80 },
      { name: "Responsive Design", icon: Layout, level: 95 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: Terminal, level: 75 },
      { name: "Databases", icon: Database, level: 70 },
      { name: "API Design", icon: Globe, level: 85 },
      { name: "System Design", icon: Cpu, level: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <Section className="bg-gradient-to-b from-black via-purple-950/10 to-black" id="skills">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="Technologies and tools I work with"
      />

      <div className="max-w-6xl mx-auto">
        {skills.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative p-6 bg-black rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </div>
                    <span className="text-sm text-gray-400 mt-2 inline-block">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0.3
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [0.3, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <GitBranch className="w-8 h-8 text-purple-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}