import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import HorizontalTimeline from './HorizontalTimeline';
import { credentials } from './data';

export default function EducationSection() {
  return (
    <Section 
      id="education"
      className="bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <SectionHeading 
        title="Education & Certificates" 
        subtitle="My academic journey and professional achievements"
      />
      
      <div className="mt-16">
        <HorizontalTimeline items={credentials} />
      </div>
    </Section>
  );
}