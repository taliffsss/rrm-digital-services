import { NavSection } from '@/types';

export interface FooterProps {
  sections: NavSection[];
  logo?: React.ReactNode;
  description?: string;
  socialLinks?: React.ReactNode;
  className?: string;
}
