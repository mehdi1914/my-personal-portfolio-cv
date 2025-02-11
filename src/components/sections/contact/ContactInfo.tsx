import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@example.com",
    href: "mailto:contact@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA"
  }
] as const;

interface ContactInfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactInfoItem({ icon: Icon, label, value, href }: ContactInfoItemProps) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-3 rounded-lg bg-purple-500/20 text-purple-200 group-hover:bg-purple-500/30 group-hover:text-purple-100 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-300">{label}</p>
        <p className="text-white group-hover:text-purple-200 transition-colors">
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

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="prose prose-invert">
        <p className="text-lg text-gray-200">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <ContactInfoItem key={index} {...detail} />
        ))}
      </div>
    </div>
  );
}