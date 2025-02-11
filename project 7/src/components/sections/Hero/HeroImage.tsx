import React from 'react';

export default function HeroImage() {
  return (
    <div className="flex-1 max-w-sm mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400"
            alt="Mehdi Khatiri"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}