import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';
import { cn } from '@/lib/utils';

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contact@example.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-12 mt-24">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className={cn(
                  "text-gray-400 hover:text-white transition-colors duration-200",
                  "transform hover:scale-110"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mehdi Khatiri. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}