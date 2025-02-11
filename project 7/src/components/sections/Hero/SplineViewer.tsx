import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function SplineViewer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <spline-viewer 
        url="https://my.spline.design/worldplanetesimora-daafc5487042be9496c32461be5c8306/"
        className="w-full h-full"
      />
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}