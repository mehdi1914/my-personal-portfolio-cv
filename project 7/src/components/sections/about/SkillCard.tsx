import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'purple' | 'blue';
}

export default function SkillCard({ icon: Icon, title, description, color }: SkillCardProps) {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
      <div className={cn(
        "p-3 rounded-lg transition-colors duration-300",
        color === 'purple' 
          ? "bg-purple-500/10 text-purple-300 group-hover:bg-purple-500/20" 
          : "bg-blue-500/10 text-blue-300 group-hover:bg-blue-500/20"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}