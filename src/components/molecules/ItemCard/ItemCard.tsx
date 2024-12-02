import React from "react";
import { ItemProps } from "./ItemCard.type";

export const ItemCard: React.FC<ItemProps> = ({ item }) => (
  <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-white border-l-4 border-cyan-700">
    <div>
      <h4 className=" font-bold text-2xl leading-tight text-cyan-600">
        {item.title}
      </h4>
      <div className="my-4">
        <p>{item.body}</p>
      </div>
    </div>
  </div>
);
