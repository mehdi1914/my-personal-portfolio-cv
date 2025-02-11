import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          "w-full px-4 py-3 rounded-lg",
          "bg-black/40 border border-white/10",
          "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50",
          "placeholder-gray-400 text-white",
          "transition-all duration-200"
        )}
      />
    </div>
  );
}