import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Spline
        scene="https://my.spline.design/worldplanetesimora-daafc5487042be9496c32461be5c8306/"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}