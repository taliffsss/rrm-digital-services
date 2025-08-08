'use client';

import { useEffect, useState } from 'react';

interface ThemeAwareLogoProps {
  className?: string;
  alt?: string;
}

export default function ThemeAwareLogo({
  className = '',
  alt = 'RRM DIGITAL Services',
}: ThemeAwareLogoProps) {
  const [logoPath, setLogoPath] = useState('/logo/rrm_logo_dark.svg');

  useEffect(() => {
    const updateLogoPath = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const path =
        currentTheme === 'light'
          ? '/logo/rrm_logo_light.svg'
          : '/logo/rrm_logo_dark.svg';
      setLogoPath(path);
    };

    // Initial update
    updateLogoPath();

    // Create a MutationObserver to watch for data-theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          updateLogoPath();
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

  return <img src={logoPath} alt={alt} className={className} />;
}
