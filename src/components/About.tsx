import React from 'react';
import { Code2, Palette, Dumbbell } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate UX/UI Designer and Frontend Developer with a keen eye for detail and a love for creating
              seamless digital experiences. My journey in the digital world has been driven by the perfect blend of
              creativity and technical expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Frontend Development</h3>
                  <p className="text-gray-600">Building responsive and performant web applications</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">UI/UX Design</h3>
                  <p className="text-gray-600">Creating intuitive and beautiful user interfaces</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fitness Enthusiast</h3>
                  <p className="text-gray-600">Balancing creativity with physical wellness</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-3 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?fit=crop&w=800&h=600"
              alt="Working"
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}