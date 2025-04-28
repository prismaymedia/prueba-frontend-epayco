import React from "react";
import { ItemCardProps } from "../../types/Item";

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.body}</p>
    </div>
  );
};
