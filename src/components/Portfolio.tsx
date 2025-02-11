import React from 'react';

const projects = [
  {
    title: 'Japanese Tea Logo',
    description: 'Minimalist branding design for a premium tea company',
    image: 'https://images.unsplash.com/photo-1578898395216-52c9a610a9ad?fit=crop&w=800&h=600',
    tags: ['Branding', 'Logo Design', 'Identity'],
  },
  {
    title: 'Flying Car',
    description: 'UI/UX design for a futuristic transportation app',
    image: 'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?fit=crop&w=800&h=600',
    tags: ['UI/UX', 'Mobile App', 'Prototype'],
  },
  {
    title: 'Quick Bit',
    description: 'Modern web application for quick digital solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=600',
    tags: ['Web Development', 'React', 'Frontend'],
  },
  {
    title: 'ARC Logo',
    description: 'Dynamic brand identity for a tech startup',
    image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?fit=crop&w=800&h=600',
    tags: ['Branding', 'Logo Design', 'Identity'],
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}