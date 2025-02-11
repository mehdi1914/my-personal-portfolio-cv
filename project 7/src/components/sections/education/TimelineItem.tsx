import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Credential } from './types';

interface TimelineItemProps {
  item: Credential;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function TimelineItem({ item, icon: Icon, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-20 group">
      {/* Icon container */}
      <div className={cn(
        "absolute left-4 -translate-x-1/2",
        "w-8 h-8 rounded-full",
        "flex items-center justify-center",
        "bg-black border-2",
        item.type === 'diploma' 
          ? "border-purple-500 text-purple-400" 
          : "border-blue-500 text-blue-400",
        "group-hover:scale-110 transition-transform duration-300"
      )}>
        <Icon className="w-4 h-4" />
      </div>

      {/* Content */}
      <div className={cn(
        "relative p-6 rounded-xl",
        "bg-black/40 backdrop-blur-sm",
        "border border-white/5",
        "group-hover:border-purple-500/30",
        "group-hover:bg-black/60",
        "transition-all duration-300"
      )}>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {item.institution}
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300">
            {item.year}
          </span>
        </div>
        <p className="mt-3 text-gray-400 group-hover:text-gray-300 transition-colors">
          {item.description}
        </p>
      </div>
    </div>
  );
}