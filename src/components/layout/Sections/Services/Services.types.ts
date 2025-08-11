export interface ServicesProps {
  className?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  includes: string[];
  footer: string;
}
