import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section className="bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900" id="contact">
      <SectionHeading 
        title="Let's Connect" 
        subtitle="Have a project in mind? Let's discuss how we can work together"
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="prose prose-invert">
            <p className="text-lg text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>
          </div>
          
          <div className="space-y-6">
            <ContactInfo 
              icon={Mail} 
              label="Email"
              value="contact@example.com"
              href="mailto:contact@example.com"
            />
            <ContactInfo 
              icon={Phone} 
              label="Phone"
              value="+1 (555) 123-4567"
              href="tel:+15551234567"
            />
            <ContactInfo 
              icon={MapPin} 
              label="Location"
              value="San Francisco, CA"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 rounded-lg",
                "bg-zinc-800/50 border border-zinc-700",
                "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50",
                "placeholder-zinc-500 text-white",
                "transition-all duration-200"
              )}
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-gradient-to-r from-purple-600 to-blue-600",
              "text-white py-3 px-6 rounded-lg",
              "flex items-center justify-center gap-2",
              "hover:opacity-90 transition-opacity",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

interface ContactInfoProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactInfo({ icon: Icon, label, value, href }: ContactInfoProps) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-white group-hover:text-purple-300 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          "w-full px-4 py-3 rounded-lg",
          "bg-zinc-800/50 border border-zinc-700",
          "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50",
          "placeholder-zinc-500 text-white",
          "transition-all duration-200"
        )}
      />
    </div>
  );
}