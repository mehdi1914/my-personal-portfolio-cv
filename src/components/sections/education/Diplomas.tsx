import React from 'react';
import { credentials } from './data';
import CredentialCard from './CredentialCard';

export default function Diplomas() {
  const diplomas = credentials.filter(cred => cred.type === 'diploma');
  
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-purple-400 mb-6">Academic Education</h3>
      <div className="space-y-6">
        {diplomas.map(diploma => (
          <CredentialCard key={diploma.id} credential={diploma} />
        ))}
      </div>
    </div>
  );
}