import React from "react";
import { ItemProps } from "./Item.types";

export const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="border p-2 rounded bg-gray-50 shadow-sm">
      <h3 className="font-bold text-lg break-words mb-2 border-b border-gray-300 ">
        {item.title}
      </h3>
      <p className="text-gray-700 break-words">
        {item.body}
      </p>
    </div>
  );
};
