// Icon mapping for services using Iconify
export const getServiceIconName = (serviceId: number): string => {
  const iconMap: Record<number, string> = {
    1: 'mdi:palette-outline', // Web & Mobile Design
    2: 'mdi:code-tags', // Web Development
    3: 'mdi:desktop-mac-dashboard', // Desktop Applications
    4: 'mdi:server', // Web Hosting
    5: 'mdi:vector-square', // Graphic Design
  };
  return iconMap[serviceId] || 'mdi:help-circle-outline';
};

// Get icon color based on service ID
export const getServiceIconColor = (_serviceId: number): string => {
  // Using underscore prefix to indicate unused parameter
  // In the future, we could implement different colors for different services
  return 'var(--accent-primary)';
};
