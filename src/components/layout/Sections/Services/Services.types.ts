export interface ServicesProps {
  className?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconPath: string;
  includes: string[];
  footer: string;
}
