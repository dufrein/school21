export interface BreadCrumbItem {
  label: string;
  path: string;
}

export interface BreadCrumbsProps {
  items?: BreadCrumbItem[];
  className?: string;
}
