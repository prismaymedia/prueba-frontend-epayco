import React from 'react';
import Item from './Item';
import { Item as ItemType } from '../../types/itemType';

interface Props {
  title?: string;
  items: ItemType[];
}

const ItemList: React.FC<Props> = ({ items, title }) => {
  return (
    <div className='p-2'>
      {title && (<h2 className='text-2xl font-extrabold mt-6 mb-5'>Items List</h2>)}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
