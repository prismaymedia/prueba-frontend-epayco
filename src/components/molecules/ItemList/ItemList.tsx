import React from 'react';
import { ItemListProps } from './ItemListProps.types';
import ItemComponent from '../../atoms/Item/Item';

const ItemList: React.FC<ItemListProps> = ({ items }) => {

  return (
    <div>
      {items.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
