import React from 'react';
import { cn } from '@/lib/utils';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[70px] bg-[#1A1A1A] md:hidden",
        "transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="container px-5 py-6 flex flex-col gap-6">
        <NavLinks />
        <NavActions />
      </div>
    </div>
  );
}