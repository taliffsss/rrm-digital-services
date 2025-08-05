import { ReactNode } from 'react';

export interface GlowBackgroundProps {
  className?: string;
  variant?: 'hero' | 'contact' | 'custom';
  intensity?: 'light' | 'medium' | 'strong';
  color?: 'primary' | 'secondary' | 'custom';
  customColor?: string;
  children?: ReactNode;
}
