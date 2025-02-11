import React from 'react';

export default function GradientOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
    </div>
  );
}