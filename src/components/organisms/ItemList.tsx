import React from 'react';
import { Item } from '../molecules/Item';

interface ItemData {
  id: number;
  title: string;
  body: string;
}

interface ItemListProps {
  items: ItemData[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map(item => (
        <Item key={item.title} title={item.title} body={item.body} />
      ))}
    </div>
  );
}; 