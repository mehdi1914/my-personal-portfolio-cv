import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import type { Credential } from './data';

interface CredentialCardProps {
  credential: Credential;
}

export default function CredentialCard({ credential }: CredentialCardProps) {
  const { title, institution, year, type, description } = credential;
  
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50 group">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg transition-colors duration-300 ${
          type === 'diploma' 
            ? 'bg-purple-900/50 text-purple-400 group-hover:bg-purple-800/50 group-hover:text-purple-300' 
            : 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/50 group-hover:text-blue-300'
        }`}>
          {type === 'diploma' ? (
            <GraduationCap className="w-6 h-6" />
          ) : (
            <Award className="w-6 h-6" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {institution}
              </p>
            </div>
            <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full group-hover:bg-gray-600/50 transition-colors duration-300">
              {year}
            </span>
          </div>
          <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}