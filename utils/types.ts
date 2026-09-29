export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  images?: string[];
  isFreelance?: boolean;
  hasLogin?: boolean;
  inDevelopment?: boolean;
  isPrivate?: boolean;
  date?: string;
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
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}