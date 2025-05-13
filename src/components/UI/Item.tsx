// src/components/UI/Item.tsx
import React from 'react';
import { ItemType } from '../../types/Item';

type ItemProps = {
  item: ItemType;
};

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
