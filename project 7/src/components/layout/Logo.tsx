import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <a 
      href="#" 
      className="flex items-center gap-2 group"
    >
      <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <span className="text-lg font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
        MK
      </span>
    </a>
  );
}