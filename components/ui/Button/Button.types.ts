import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, ButtonSize } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}
