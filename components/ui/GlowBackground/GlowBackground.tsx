import React from 'react';
import { cn } from '@/lib/utils';

interface GlowBackgroundProps {
  className?: string;
  variant?: 'hero' | 'contact' | 'custom';
  intensity?: 'light' | 'medium' | 'strong';
  color?: 'primary' | 'secondary' | 'custom';
  customColor?: string;
}

const GlowBackground: React.FC<GlowBackgroundProps> = ({
  className,
  variant = 'hero',
  intensity = 'medium',
  color = 'primary',
  customColor,
}) => {
  const getColorClass = () => {
    if (customColor) return customColor;
    switch (color) {
      case 'primary':
        return 'bg-[var(--accent-primary)]';
      case 'secondary':
        return 'bg-[var(--accent-secondary)]';
      default:
        return 'bg-[var(--accent-primary)]';
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'light':
        return 'blur(80px)';
      case 'strong':
        return 'blur(150px)';
      default:
        return 'blur(120px)';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'absolute top-80 bottom-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[200px]';
      case 'contact':
        return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px]';
      case 'custom':
        return 'absolute inset-0';
      default:
        return 'absolute top-80 bottom-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[200px]';
    }
  };

  return (
    <div
      className={cn(
        getVariantClasses(),
        getColorClass(),
        'rounded-full pointer-events-none z-0',
        className
      )}
      style={{ filter: getIntensityClass() }}
    />
  );
};

export default GlowBackground;
