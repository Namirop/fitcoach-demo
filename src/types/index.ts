// Types for the FitCoach Pro website

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  priceDetail?: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  result: string;
}

export interface Certification {
  id: string;
  name: string;
  logo: string;
  year: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Transformation {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  weightLost?: string;
  muscleGained?: string;
  testimonial: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'nutrition' | 'training' | 'mindset';
  date: string;
  readTime: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  requestType: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
