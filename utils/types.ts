export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  isFreelance?: boolean;
  hasLogin?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  mode: string,

  description: string; // Changed to string for paragraph summary
  tech: string[];
  type: 'Remote' | 'Presencial' | 'Hybrid';
  logo?: string; // Added optional logo property
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}