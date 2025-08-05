import { NavItem } from '@/types';

export interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
}

export interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}
