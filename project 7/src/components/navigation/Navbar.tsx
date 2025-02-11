import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import MobileMenu from './MobileMenu';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 10;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "px-4 py-3",
        "transition-all duration-300"
      )}
    >
      <nav 
        className={cn(
          "max-w-[1200px] mx-auto h-[70px]",
          "rounded-2xl px-6",
          "transition-all duration-300",
          isScrolled 
            ? "bg-black/40 backdrop-blur-md shadow-lg border border-white/5" 
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-full">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <NavActions />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={cn(
                "w-full h-0.5 bg-white transition-all",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </nav>
    </header>
  );
}