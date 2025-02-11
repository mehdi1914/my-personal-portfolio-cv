// import React from 'react';
import { cn } from '@/lib/utils';
import useTypewriter from '@/lib/hooks/useTypewriter';

export default function AnimatedTitle() {
  const text = useTypewriter({
    words: [
      "Mehdi Khatiri",
      "a Frontend Developer",
      "a React.js Expert",
      "a Next.js Developer",
      "a TypeScript Pro",
      "a Creative Coder"
    ],
    loop: true,
    delayBetweenWords: 2500,
  });

  return (
    <span className={cn(
      "relative inline-block",
      "animate-slide-in",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-purple-600/30 before:to-blue-600/30",
      "before:blur-xl before:transform before:scale-150",
      "before:animate-pulse-slow"
    )}>
      <span className="relative bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-bold">
        {text}
      </span>
      <span className="animate-blink ml-1 font-light">|</span>
    </span>
  );
}