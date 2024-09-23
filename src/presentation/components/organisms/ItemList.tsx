import React from 'react';
import { ItemData } from '../../../domain/models/ItemData';

interface ItemListProps {
  items: ItemData[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="w-full sm:w-3/4 mx-auto grid gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 animate-fadeIn">
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>

  );
};

export default ItemList;