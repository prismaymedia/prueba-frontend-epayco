import { ReactNode } from "react";

export interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

export interface TabsProps {
  activeTab: 'latest' | 'all';
  onTabChange: (tab: 'latest' | 'all') => void;
  latestItem: ReactNode | null;
  allItems: ReactNode; 
  ItemCounter: React.FC;
}


export interface ItemData {
  id: number;
  name: string;
  description: string;
}