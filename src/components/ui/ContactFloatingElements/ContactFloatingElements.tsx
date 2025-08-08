import React from 'react';

const ContactFloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Subtle decorative elements around the contact content */}

      {/* Top-left decorative element */}
      <div
        className="absolute top-20 left-10 w-3 h-3 bg-[var(--accent-primary)] opacity-30 rounded-full"
        style={{
          animation: 'float-smooth 4s ease-in-out infinite',
        }}
      />

      {/* Top-right decorative element */}
      <div
        className="absolute top-32 right-16 w-2 h-2 bg-[var(--accent-primary)] opacity-40 rounded-full"
        style={{
          animation: 'float-smooth 3.5s ease-in-out infinite 0.5s',
        }}
      />

      {/* Bottom-left decorative element */}
      <div
        className="absolute bottom-24 left-20 w-4 h-4 bg-[var(--accent-primary)] opacity-25 rounded-full"
        style={{
          animation: 'float-smooth 4.5s ease-in-out infinite 1s',
        }}
      />

      {/* Bottom-right decorative element */}
      <div
        className="absolute bottom-16 right-12 w-3 h-3 bg-[var(--accent-primary)] opacity-35 rounded-full"
        style={{
          animation: 'float-smooth 3.8s ease-in-out infinite 0.8s',
        }}
      />

      {/* Center decorative elements */}
      <div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-[var(--accent-primary)] opacity-20 rounded-full"
        style={{
          animation: 'float-smooth 5s ease-in-out infinite 0.3s',
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[var(--accent-primary)] opacity-30 rounded-full"
        style={{
          animation: 'float-smooth 4.2s ease-in-out infinite 1.2s',
        }}
      />
    </div>
  );
};

export default ContactFloatingElements;
