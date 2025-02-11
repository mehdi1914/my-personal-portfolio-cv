import React from 'react';
import Button from '@/components/ui/Button';

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        variant="primary"
        size="lg"
        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Explore My Work
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Let's Connect
      </Button>
    </div>
  );
}