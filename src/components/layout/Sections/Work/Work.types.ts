export interface WorkProps {
  className?: string;
}

export interface WorkItem {
  id: number;
  image: string;
  title: string;
  category: string;
  width?: string;
  link?: string;
}

export interface WorkRow {
  id: string;
  items: WorkItem[];
}

export interface WorkFilter {
  id: string;
  label: string;
}
