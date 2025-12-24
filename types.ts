
export type ExpertTheme = 'default' | 'cyan' | 'gold' | 'violet';

export interface Expert {
  id: string;
  name: string;
  tagline: string;
  theme: ExpertTheme;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  type: 'individual' | 'company';
  image: string;
}

export interface WellnessActivity {
  id: string;
  title: string;
  description: string;
  icon: string;
}
