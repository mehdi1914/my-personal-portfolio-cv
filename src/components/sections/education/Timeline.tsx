import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Credential } from './types';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  items: Credential[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item}
            icon={item.type === 'diploma' ? GraduationCap : Award}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}