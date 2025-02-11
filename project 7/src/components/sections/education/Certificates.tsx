import React from 'react';
import { credentials } from './data';
import CredentialCard from './CredentialCard';

export default function Certificates() {
  const certificates = credentials.filter(cred => cred.type === 'certificate');
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-400 mb-6">Professional Certifications</h3>
      <div className="space-y-6">
        {certificates.map(certificate => (
          <CredentialCard key={certificate.id} credential={certificate} />
        ))}
      </div>
    </div>
  );
}