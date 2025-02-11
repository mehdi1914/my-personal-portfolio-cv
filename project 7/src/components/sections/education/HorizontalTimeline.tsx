import React, { useRef } from 'react';
import { GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Credential } from './types';
import TimelineCard from './TimelineCard';

interface HorizontalTimelineProps {
  items: Credential[];
}

export default function HorizontalTimeline({ items }: HorizontalTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
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
        {items.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            icon={item.type === 'diploma' ? GraduationCap : Award}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}