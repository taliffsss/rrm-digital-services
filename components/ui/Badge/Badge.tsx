'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BadgeSize } from '@/types';
import { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  children: ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-full font-medium border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)]';

    const sizes: Record<NonNullable<BadgeProps['size']>, string> = {
      sm: 'px-3 py-1 text-xs',
      md: 'px-4 py-1 text-sm',
      lg: 'px-5 py-1 text-sm',
    };

    return (
      <span
        className={cn(baseClasses, sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
