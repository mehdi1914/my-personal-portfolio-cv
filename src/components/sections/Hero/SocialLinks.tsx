import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Dribbble } from './icons/Dribbble';

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://dribbble.com", icon: Dribbble, label: "Dribbble" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contact@example.com", icon: Mail, label: "Email" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          className="group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500 ease-out -z-10 blur-md" />
          <div className="p-3 rounded-full transition-transform duration-300 ease-out group-hover:scale-110">
            <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>
      ))}
    </div>
  );
}