import React from "react";
import { Item } from "../../../domain/models/Item";
import { ItemCard } from "../../molecules/ItemCard/ItemCard";
import { Title } from '../../atoms/Title/Title';

interface ItemListProps {
  items: Item[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => (
  <section className="">
    <Title text="Item List" level={2} className="text-center text-2xl font-bold mt-8 mb-4"/>
    <div className="mb-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);
