import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className={cn(
        "max-w-5xl mx-auto",
        "px-4 py-1.5",
        "rounded-full border",
        "transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-black/30 backdrop-blur-sm border-white/5 shadow-lg scale-95" 
          : "bg-transparent border-transparent"
      )}>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}