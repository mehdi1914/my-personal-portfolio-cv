import React from 'react';
import { Code } from 'lucide-react';

export default function Logo() {
  return (
    <a 
      href="/" 
      className="flex items-center gap-2 h-[40px]"
      aria-label="Home"
    >
      <div className="p-1.5 rounded bg-gradient-to-r from-purple-600 to-blue-600">
        <Code className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Mehdi
      </span>
    </a>
  );
}