export interface Credential {
  id: number;
  title: string;
  institution: string;
  year: string;
  type: 'diploma' | 'certificate';
  description: string;
}

export const credentials: Credential[] = [
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