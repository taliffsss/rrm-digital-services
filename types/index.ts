import { ReactNode } from 'react';

// Theme types
export type Theme = 'light' | 'dark';

// Button types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Card types
export type CardVariant = 'default' | 'elevated' | 'outlined';

// Input types
export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';

// Badge types
export type BadgeSize = 'sm' | 'md' | 'lg';

// Layout types
export type SectionVariant = 'default' | 'alternate' | 'hero' | 'footer';

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Navigation types
export interface NavItem {
  id: number;
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Feature types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Contact types
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

// Social media types
export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}
