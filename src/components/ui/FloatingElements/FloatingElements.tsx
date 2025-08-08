'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface FloatingElement {
  id: string;
  type: 'circle' | 'solid-circle' | 'star' | 'code';
  left: string;
  duration: number;
  size: string;
  trajectory: string;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const createNewElement = useCallback((): FloatingElement => {
    const elementTypes: ('circle' | 'solid-circle' | 'star' | 'code')[] = [
      'circle',
      'solid-circle',
      'star',
      'code',
    ];
    const trajectories = [
      'straight-up',
      'diagonal-left',
      'diagonal-right',
      'slight-left',
      'slight-right',
      'sharp-left',
      'sharp-right',
    ];
    const sizes = [
      'w-4 h-4',
      'w-5 h-5',
      'w-6 h-6',
      'w-7 h-7',
      'w-8 h-8',
      'w-10 h-10',
    ];

    const duration = Math.random() * 4 + 8; // Random between 8s and 12s

    return {
      id: `element-${Date.now()}-${Math.random()}`, // Unique ID
      type: elementTypes[Math.floor(Math.random() * elementTypes.length)],
      left: `${(Math.random() * 40 + 30).toFixed(1)}%`, // Random between 30% and 70% (ellipse bounds)
      duration,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      trajectory: trajectories[Math.floor(Math.random() * trajectories.length)],
    };
  }, []);

  const removeElement = useCallback((id: string) => {
    setElements(prev => prev.filter(el => el.id !== id));
  }, []);

  const addElement = useCallback(() => {
    const newElement = createNewElement();
    setElements(prev => [...prev, newElement]);

    // Remove element after animation completes
    const duration = newElement.duration * 1000; // Convert to milliseconds
    setTimeout(() => {
      removeElement(newElement.id);
    }, duration + 500); // Add small buffer
  }, [createNewElement, removeElement]);

  useEffect(() => {
    // Add initial elements with staggered timing
    const initialElements = 10; // Start with more elements
    for (let i = 0; i < initialElements; i++) {
      setTimeout(() => {
        addElement();
      }, i * 600); // Stagger by 600ms
    }

    // Continuously add new elements in groups
    const spawnInterval = setInterval(() => {
      const spawnCount = Math.floor(Math.random() * 2) + 2; // Random 2-3 elements
      for (let i = 0; i < spawnCount; i++) {
        setTimeout(() => {
          addElement();
        }, i * 150); // Small delay between each in the group
      }
    }, 2000); // Add group every 2 seconds

    return () => {
      clearInterval(spawnInterval);
    };
  }, [addElement]);

  const renderElement = (element: FloatingElement) => {
    const baseClasses = `absolute ${element.size} text-[var(--accent-primary)] opacity-50`;
    const animationStyle = {
      left: element.left,
      bottom: '20%', // Position at ellipse level
      animation: `floatUp-${element.trajectory} ${element.duration}s linear forwards`,
      animationFillMode: 'both',
      willChange: 'transform, opacity',
    };

    switch (element.type) {
      case 'circle':
        return (
          <div key={element.id} className={baseClasses} style={animationStyle}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-full h-full"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        );

      case 'solid-circle':
        return (
          <div key={element.id} className={baseClasses} style={animationStyle}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        );

      case 'star':
        return (
          <div key={element.id} className={baseClasses} style={animationStyle}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
          </div>
        );

      case 'code':
        return (
          <div key={element.id} className={baseClasses} style={animationStyle}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-full h-full"
            >
              <polyline points="16,18 22,12 16,6" />
              <polyline points="8,6 2,12 8,18" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map(renderElement)}
    </div>
  );
};

export default FloatingElements;
