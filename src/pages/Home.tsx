import React, { useState } from "react";
import { useItems, useAddItem } from "../services/api";
import { Form } from "../components/molecules/Form";
import { ItemList } from "../components/organisms/ItemList";
import { Loading } from "../components/atoms/Loading";
import { ErrorMessage } from "../components/atoms/ErrorMessage";
import { Item } from "../types/Item";
import { EyeIcon } from "@heroicons/react/16/solid";
import { v4 as uuidv4 } from "uuid";

export const Home: React.FC = () => {
  const [newItems, setNewItems] = useState<Item[]>([]);
  const [newData, setNewData] = useState<Item[]>([]);
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();

  React.useEffect(() => {
    if (items && items.length) {
      setNewData(items);
    }
  }, [items]);

  const handleAddItem = (
    data: { title: string; body: string },
    reset: () => void
  ) => {
    const newItem = {
      name: data.title,
      description: data.body,
      title: data.title,
      body: data.body,
      id: uuidv4(),
    };

    setNewItems([newItem]);
    setNewData([newItem, ...newData]);
    mutation.mutate(newItem);
    reset();
  };

  const handleViewAll = () => {
    setNewItems([]);
  };

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  const data = newItems.length > 0 ? newItems : newData;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <Form onSubmit={handleAddItem} />
      <div className="flex items-center justify-between mt-8 mb-4 border-b-2 border-gray-300 pb-2">
        <h2 className="text-2xl font-bold text-gray-700 border-gray-300 pb-2">
          Items List
        </h2>
        {newItems.length > 0 && (
          <button
            onClick={handleViewAll}
            className="flex items-center text-blue-500 hover:text-blue-700 transition"
          >
            <EyeIcon className="w-5 h-5 mr-1" />
            View All
          </button>
        )}
      </div>
      <div className="max-h-96 overflow-auto border border-gray-300 rounded-md">
        <ItemList items={data || []} />
      </div>
    </div>
  );
};
