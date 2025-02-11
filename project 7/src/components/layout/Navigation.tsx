import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, User, Briefcase, Book, Mail, Download, Code2 } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Portfolio', href: '#portfolio', icon: Briefcase },
  { label: 'Education', href: '#education', icon: Book },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                "relative after:absolute after:left-0 after:bottom-0",
                "after:h-0.5 after:w-0 after:bg-purple-500",
                "after:transition-all after:duration-300",
                "hover:after:w-full",
                "text-white"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-x-0 top-[72px] p-4 md:hidden",
        "bg-black/80 backdrop-blur-lg",
        "transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-3 text-white hover:bg-white/5 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 p-3 text-white hover:bg-white/5 rounded-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
}