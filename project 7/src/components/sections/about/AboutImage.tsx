import React from 'react';

export default function AboutImage() {
  return (
    <div className="relative max-w-[280px] mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-75 blur-xl animate-pulse-subtle"></div>
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=280&h=373"
          alt="Mehdi Khatiri"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:opacity-50 transition-opacity duration-300" />
      </div>
    </div>
  );
}