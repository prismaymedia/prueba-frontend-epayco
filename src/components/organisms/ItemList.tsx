import React from "react";
import { ItemListProps } from "../../types/Item";
import { ItemCard } from "../molecules/ItemCard";

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
