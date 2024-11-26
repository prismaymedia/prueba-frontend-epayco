import React from "react";
import { ItemListProps } from "./ItemList.types";
import { Item } from "../../atoms/Item/Item";

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
