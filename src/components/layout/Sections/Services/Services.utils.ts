// Icon mapping for services using Iconify
export const getServiceIconName = (serviceId: number): string => {
  const iconMap: Record<number, string> = {
    1: 'ph:layout-thin', // UI UX Design
    2: 'ph:code-thin', // Web Development
    3: 'ph:desktop-thin', // Desktop Applications
    4: 'ph:database-thin', // Web Hosting
    5: 'ph:newspaper-thin', // Graphic Design
  };
  return iconMap[serviceId] || 'mdi:help-circle-outline';
};
