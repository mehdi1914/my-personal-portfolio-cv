import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const credentials = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Science",
    institution: "University of Technology",
    year: "2020",
    type: "diploma",
    description: "Specialized in Software Engineering and Web Development"
  },
  {
    id: 2,
    title: "Advanced Frontend Development",
    institution: "Frontend Masters",
    year: "2021",
    type: "certificate",
    description: "Mastery in React, TypeScript, and Modern Web Development"
  },
  {
    id: 3,
    title: "UI/UX Design Professional",
    institution: "Design Academy",
    year: "2022",
    type: "certificate",
    description: "Comprehensive training in user interface and experience design"
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    year: "2022",
    type: "certificate",
    description: "Cloud computing and AWS services fundamentals"
  }
];

export default function Education() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section className="bg-gradient-to-b from-black via-purple-950/10 to-black" id="education">
      <SectionHeading 
        title="Education & Certificates" 
        subtitle="My academic journey and professional achievements"
      />
      
      <div className="relative mt-16 group">
        {/* Timeline line */}
        <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
        
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Timeline Content */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {credentials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 w-[300px] snap-center"
            >
              {/* Icon */}
              <div className={cn(
                "absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
                "w-12 h-12 rounded-full",
                "flex items-center justify-center",
                "bg-black border-2",
                item.type === 'diploma' 
                  ? "border-purple-500 text-purple-400" 
                  : "border-blue-500 text-blue-400",
                "transform transition-transform duration-300 hover:scale-110"
              )}>
                {item.type === 'diploma' ? (
                  <GraduationCap className="w-6 h-6" />
                ) : (
                  <Award className="w-6 h-6" />
                )}
              </div>

              {/* Year */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300">
                  {item.year}
                </span>
              </div>

              {/* Card */}
              <div className={cn(
                "p-6 rounded-xl h-[220px]",
                "bg-black/40 backdrop-blur-sm",
                "border border-white/5 hover:border-purple-500/30",
                "transform transition-all duration-300",
                "hover:bg-black/60 hover:-translate-y-1"
              )}>
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-purple-300 mb-3">
                  {item.institution}
                </p>
                <p className="text-gray-400 line-clamp-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}