import React from 'react';
import Item from './Item';

type ItemListProps = {
  items: { id: number; title: string; body: string }[];
};

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
