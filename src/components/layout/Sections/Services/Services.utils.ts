// Icon mapping for services
export const getServiceIcon = (serviceId: number): string => {
  const iconMap: Record<number, string> = {
    1: '/icon/web_design.svg',
    2: '/icon/web_development.svg',
    3: '/icon/web_development.svg', // Desktop Applications
    4: '/icon/web_hosting.svg',
    5: '/icon/graphic_design.svg',
  };
  return iconMap[serviceId] || '/icon/default.svg';
};
