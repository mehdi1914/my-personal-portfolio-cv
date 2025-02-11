import React from 'react';
import Spline from '@splinetool/react-spline';
import { useSplineLoader } from './hooks/useSplineLoader';

export default function SplineScene() {
  const { isLoading } = useSplineLoader();

  return (
    <div className="absolute inset-0 z-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-32 h-32 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin" />
        </div>
      )}
      <Spline 
        scene="https://build.spline.design/w1EGyKFr1qGKuu691mbo/scene.splinecontent"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}