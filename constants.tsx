
import React from 'react';
import { Shield, TrendingUp, Cpu, Brain, Apple, Dumbbell, Moon, Users, Droplets, HeartPulse, Ban, FileSpreadsheet } from 'lucide-react';
import { Expert, Testimonial, WellnessActivity } from './types';

export const EXPERTS: Expert[] = [
  {
    id: 'ahad',
    name: 'Ahad Farhan',
    tagline: 'Security & Marketing',
    theme: 'cyan',
    description: 'Protecting digital identities while amplifying brand resonance through predictive AI modeling.',
    icon: 'Shield'
  },
  {
    id: 'rizwan',
    name: 'Rizwan Abbas',
    tagline: 'NASDAQ Finance',
    theme: 'gold',
    description: 'Bridging institutional finance with algorithmic agents to scale fiscal operations at high velocity.',
    icon: 'TrendingUp'
  },
  {
    id: 'zayam',
    name: 'Zayam Anjum',
    tagline: 'Enterprise Operations',
    theme: 'violet',
    description: 'Orchestrating complex business workflows with neural-network driven operational efficiency.',
    icon: 'Cpu'
  }
];

export const WELLNESS_ACTIVITIES: WellnessActivity[] = [
  { 
    id: 'physical', 
    title: 'Physical Activity', 
    description: 'Aim for 150+ mins of moderate activity. We ensure you never skip a session through proactive scheduling.', 
    icon: 'Dumbbell' 
  },
  { 
    id: 'nutrition', 
    title: 'Nutrition', 
    description: 'Curating professional nutrition habits with nutrient-dense foods and limited processed sugars.', 
    icon: 'Apple' 
  },
  { 
    id: 'hydration', 
    title: 'Hydration', 
    description: 'Continuous monitoring to ensure you stay optimally hydrated throughout the high-performance day.', 
    icon: 'Droplets' 
  },
  { 
    id: 'sleep', 
    title: 'Sleep Optimization', 
    description: 'Prioritizing 7-9 hours of quality recovery. We architect the perfect environment for deep rest.', 
    icon: 'Moon' 
  },
  { 
    id: 'stress', 
    title: 'Stress Management', 
    description: 'Mitigating stress in professional life through guided breathing, meditation, and flow-state hobbies.', 
    icon: 'Brain' 
  },
  { 
    id: 'habits', 
    title: 'Harmful Habits', 
    description: 'Strategic intervention to limit alcohol, quit smoking, and eliminate drug dependency for peak health.', 
    icon: 'Ban' 
  },
  { 
    id: 'preventative', 
    title: 'Preventative Care', 
    description: 'Automated medical data management in cloud storage. Tracking checkups and screenings in one portal.', 
    icon: 'FileSpreadsheet' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Vance',
    role: 'CEO',
    company: 'VERIDIAN LOGISTICS',
    content: 'MEGA AI transformed our supply chain logic. The Enterprise Suite didn\'t just save costs; it predicted bottlenecks before they happened. Revolutionary.',
    type: 'company',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Marcus Thompson',
    role: 'WELLNESS DIRECTOR',
    company: 'AETHERIS HEALTH',
    content: 'The Personal Suite is the future of preventative care. Our clients saw a 40% increase in sleep quality metrics within just three weeks.',
    type: 'company',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=256&h=256&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Sarah Miller',
    role: 'PROFESSIONAL ATHLETE',
    content: 'Finally, an AI that understands the nuance of my physiology. The recovery protocols are world-class and have shaved weeks off my training cycles.',
    type: 'individual',
    image: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?q=80&w=256&h=256&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Julian Ross',
    role: 'MANAGING PARTNER',
    company: 'SUMMIT CAPITAL',
    content: 'Rizwan and the team provided a financial audit that uncovered efficiencies we missed for a decade. The ROI has been extraordinary.',
    type: 'company',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop'
  }
];
