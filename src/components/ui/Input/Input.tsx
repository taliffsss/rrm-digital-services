'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      label,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      id,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'flex w-full rounded-md border transition-all duration-200 focus-within:ring-2 focus-within:ring-[var(--accent-primary)] focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variantClasses = {
      default:
        'bg-[var(--bg-primary)] border-[var(--border-primary)] focus-within:border-[var(--border-accent)]',
      filled:
        'bg-[var(--bg-secondary)] border-[var(--border-primary)] focus-within:border-[var(--border-accent)]',
      outlined:
        'bg-transparent border-[var(--border-primary)] focus-within:border-[var(--border-accent)]',
    };

    const sizeClasses = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-sm',
      lg: 'h-12 text-base',
    };

    const inputClasses =
      'flex-1 bg-transparent px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none';

    const widthClass = fullWidth ? 'w-full' : '';

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn('space-y-2', widthClass)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--text-primary)]"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          {leftIcon && (
            <div className="flex items-center pl-3 text-[var(--text-muted)]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputClasses,
              leftIcon && 'pl-0',
              rightIcon && 'pr-0'
            )}
            {...props}
          />
          {rightIcon && (
            <div className="flex items-center pr-3 text-[var(--text-muted)]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-[var(--accent-error)]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
