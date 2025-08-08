'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ThemeAwareSVGProps {
  className?: string;
  alt?: string;
}

export default function ThemeAwareSVG({
  className = '',
  alt = 'Planet shape',
}: ThemeAwareSVGProps) {
  const [svgPath, setSvgPath] = useState('/elements/elipse_planet_dark.svg');

  useEffect(() => {
    const updateSvgPath = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const path =
        currentTheme === 'light'
          ? '/elements/elipse_planet_light.svg'
          : '/elements/elipse_planet_dark.svg';
      setSvgPath(path);
    };

    // Initial update
    updateSvgPath();

    // Create a MutationObserver to watch for data-theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          updateSvgPath();
        }
      });
    });

    // Start observing the document element for data-theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={svgPath}
      alt={alt}
      width={1200}
      height={200}
      className={className}
      loading="eager"
    />
  );
}
