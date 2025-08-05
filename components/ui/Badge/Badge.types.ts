import { HTMLAttributes, ReactNode } from 'react';
import { BadgeSize } from '@/types';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  children: ReactNode;
}
