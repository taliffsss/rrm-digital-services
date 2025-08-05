'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import {
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
} from './Card.types';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'rounded-lg border transition-all duration-200';

    const variantClasses = {
      default: 'bg-[var(--bg-card)] border-[var(--border-primary)]',
      elevated:
        'bg-[var(--bg-card)] border-[var(--border-primary)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]',
      outlined: 'bg-transparent border-[var(--border-primary)]',
    };

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
