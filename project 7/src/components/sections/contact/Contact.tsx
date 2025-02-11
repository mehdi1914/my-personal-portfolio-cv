import React from 'react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <Section 
      className="bg-gradient-to-b from-purple-950/20 to-black" 
      id="contact"
    >
      <SectionHeading 
        title="Let's Connect" 
        subtitle="Have a project in mind? Let's discuss how we can work together"
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}