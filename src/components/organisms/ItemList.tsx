import React from 'react';
import { Item } from '../molecules/ItemCard';

interface ItemListProps {
  items: Item[];
  highlightedItemId?: number; 
}

const ItemList: React.FC<ItemListProps> = ({ items, highlightedItemId }) => {
  return (
    <div className="space-y-4">
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className={`p-6 rounded-md shadow-md transition-shadow ${
                item.id === highlightedItemId
                  ? 'bg-green-100 border-2 border-green-400'
                  : 'bg-white'
              } hover:shadow-lg`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No items found</p>
      )}
    </div>
  );
};

export default ItemList;
