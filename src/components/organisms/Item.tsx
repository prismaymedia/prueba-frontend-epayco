import React from 'react';
import { Item as ItemType } from '../../types/itemType';

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
  return (
    <div className='block max-w-full p-5 shadow-sm border border-gray-200 rounded-lg hover:bg-[#fbfbfb] transform duration-500 hover:scale-[1.01] cursor-pointer transition-all min-h-[120px]'>
      <h3 className='mb-2 text-gray-900 text-xl font-bold'>{item.title}</h3>
      <p className='text-gray-700'>{item.body}</p>
    </div>
  );
};

export default Item;
