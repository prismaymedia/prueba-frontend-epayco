import React from 'react';

export type ItemType = {
  id: number;
  title: string;
  body: string;
};

interface ItemProps {
  item: ItemType;
}

export const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};
