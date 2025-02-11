import React from 'react';
import { cn } from '@/lib/utils';
import useTypewriter from '@/lib/hooks/useTypewriter';

export default function AnimatedText() {
  const text = useTypewriter({
    words: ["Mehdi Khatiri", "a Frontend Developer", "a UI/UX Designer", "a Problem Solver"],
    loop: true,
    typingSpeed: 80,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <span className={cn(
      "relative inline-block",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-purple-500/20 before:to-blue-500/20",
      "before:blur-xl before:transform before:scale-150",
      "before:animate-pulse-slow"
    )}>
      <span className="relative bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="animate-blink ml-1 text-purple-300">|</span>
    </span>
  );
}