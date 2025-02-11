export interface Credential {
  id: number;
  title: string;
  institution: string;
  year: string;
  type: 'diploma' | 'certificate';
  description: string;
}

export interface TimelineItem extends Credential {
  date: string;
  icon: 'diploma' | 'certificate';
}