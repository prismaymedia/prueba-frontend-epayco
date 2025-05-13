// src/components/UI/ItemList.tsx
import React from 'react';
import Item from './Item';
import { ItemType } from '../../types/Item';

type ItemListProps = {
  items: ItemType[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
