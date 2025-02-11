import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="relative container mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm Mehdi Khatiri
          </h1>
          <p className="text-xl lg:text-2xl text-purple-200 mb-8 animate-fade-in-delay">
            UX/UI Design & Frontend Development | Building Founder-Focused Digital Experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105">
              Explore My Work
            </button>
            <button className="px-8 py-3 border-2 border-purple-400 text-purple-100 hover:bg-purple-400/10 rounded-full transition-all transform hover:scale-105">
              Let's Connect
            </button>
          </div>
          <div className="flex gap-6 mt-8 justify-center lg:justify-start">
            <a href="https://github.com" className="text-purple-200 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-purple-200 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-purple-200 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
              alt="Mehdi Khatiri"
              className="relative rounded-lg w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}