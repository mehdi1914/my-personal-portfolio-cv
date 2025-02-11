import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import { GraduationCap, Award } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Science",
    institution: "University of Technology",
    year: "2020",
    type: "diploma",
    description: "Specialized in Software Engineering and Web Development"
  },
  {
    id: 2,
    title: "Advanced Frontend Development",
    institution: "Frontend Masters",
    year: "2021",
    type: "certificate",
    description: "Mastery in React, TypeScript, and Modern Web Development"
  },
  {
    id: 3,
    title: "UI/UX Design Professional",
    institution: "Design Academy",
    year: "2022",
    type: "certificate",
    description: "Comprehensive training in user interface and experience design"
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    year: "2022",
    type: "certificate",
    description: "Cloud computing and AWS services fundamentals"
  },
  {
    id: 5,
    title: "Agile Project Management",
    institution: "Scrum Alliance",
    year: "2023",
    type: "certificate",
    description: "Certified ScrumMaster and Agile methodologies"
  }
];

export default function Education() {
  return (
    <Section className="bg-gray-900" id="education">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certificates</h2>
            <p className="text-lg text-gray-400">My academic journey and professional certifications</p>
          </div>
          
          <div className="space-y-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-black/40 rounded-xl p-6 border border-white/10 
                         hover:border-purple-500/30 hover:bg-black/60 
                         transition-all duration-300 
                         hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    cert.type === 'diploma' 
                      ? 'bg-purple-900/50 text-purple-400 group-hover:bg-purple-800/50 group-hover:text-purple-300' 
                      : 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/50 group-hover:text-blue-300'
                  }`}>
                    {cert.type === 'diploma' ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {cert.institution}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full group-hover:bg-gray-700/50 transition-colors">
                        {cert.year}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}