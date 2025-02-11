import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Credential } from './types';

interface TimelineCardProps {
  item: Credential;
  icon: LucideIcon;
  index: number;
}

export default function TimelineCard({ item, icon: Icon, index }: TimelineCardProps) {
  return (
    <motion.div
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
        <Icon className="w-6 h-6" />
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
  );
}