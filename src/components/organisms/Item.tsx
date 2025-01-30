import React, { FC } from "react";

interface ItemProps {
  item: {
    id: number;
    title: string;
    body: string;
  };
}

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600">{item.body}</p>
    </div>
  );
};

export default Item;
