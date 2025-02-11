import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import AboutContent from './about/AboutContent';
import AboutImage from './about/AboutImage';

export default function About() {
  return (
    <Section className="bg-black/60" id="about">
      <SectionHeading 
        title="About Me" 
        subtitle="Passionate about creating seamless digital experiences through design and code"
      />
      <div className="grid lg:grid-cols-[1fr,280px] gap-12 items-start max-w-6xl mx-auto">
        <AboutContent />
        <AboutImage />
      </div>
    </Section>
  );
}