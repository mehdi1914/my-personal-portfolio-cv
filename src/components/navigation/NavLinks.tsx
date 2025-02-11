import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const mainLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  {
    label: 'Usecases',
    href: '#usecases',
    dropdown: [
      { label: 'Startups', href: '#startups' },
      { label: 'Enterprise', href: '#enterprise' },
      { label: 'Developers', href: '#developers' },
    ],
  },
  {
    label: 'Integrations',
    href: '#integrations',
    dropdown: [
      { label: 'GitHub', href: '#github' },
      { label: 'Slack', href: '#slack' },
      { label: 'Discord', href: '#discord' },
    ],
  },
];

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-10">
      {mainLinks.map((link) => (
        <NavItem key={link.label} {...link} />
      ))}
    </ul>
  );
}

function NavItem({ label, href, dropdown }: {
  label: string;
  href: string;
  dropdown?: Array<{ label: string; href: string; }>;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={href}
        className="flex items-center gap-1 text-base font-medium text-gray-200 hover:text-purple-400 transition-colors duration-300"
        aria-expanded={dropdown ? isOpen : undefined}
      >
        {label}
        {dropdown && <ChevronDown className="w-4 h-4" />}
      </a>

      {dropdown && (
        <div className={cn(
          "absolute top-full left-0 mt-2 py-2 min-w-[200px]",
          "bg-[#2A2A2A] rounded-lg shadow-xl",
          "transform transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}>
          {dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm text-gray-200 hover:text-purple-400 hover:bg-white/5 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}