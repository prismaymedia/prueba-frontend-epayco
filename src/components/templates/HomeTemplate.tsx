import React, { useState } from 'react';
import AddItemForm from '../organisms/AddItemForm';
import ItemList from '../organisms/ItemList';
import { Item } from '../molecules/ItemCard';

interface HomeTemplateProps {
  items: Item[];
  onAddItem: (data: { title: string; body: string }) => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ items, onAddItem }) => {
  const [highlightedItemId, setHighlightedItemId] = useState<number | undefined>(undefined);

  const handleAddItem = (data: { title: string; body: string }) => {
    onAddItem(data);
  };

  return (
    <div className="bg-gray-100 lg:min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/2 lg:h-screen lg:bg-gray-100 lg:p-4 lg:min-h-screen">
        <div className="bg-white lg:p-3 rounded-lg shadow-lg ">
          <AddItemForm onSubmit={handleAddItem} onNewItemAdded={setHighlightedItemId} />
        </div>
      </div>
      <div className="lg:ml-1/3 flex-1 flex flex-col items-start p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Items List</h2>
        {items.length > 0 ? (
          <ItemList items={items} highlightedItemId={highlightedItemId} />
        ) : (
          <div className="text-center text-gray-600">No items found</div>
        )}
      </div>
    </div>
  );
};

export default HomeTemplate;
