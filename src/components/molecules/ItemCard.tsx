import React from 'react';

export interface Item {
  id: number;
  title: string;
  body: string;
  isNew?: boolean; 
}

const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div
      className={`border p-4 mb-4 rounded-lg shadow-md ${
        item.isNew ? 'bg-yellow-100 border-yellow-400' : 'bg-white'
      }`}
    >
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default ItemCard;
