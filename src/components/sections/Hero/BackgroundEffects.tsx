import React from 'react';

export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle" />
      </div>
    </>
  );
}