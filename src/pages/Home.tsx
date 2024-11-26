import React, { useState } from "react";
import { useItems } from "../hooks/useItems";
import { useAddItem } from "../hooks/useAddItem";
import { Form } from "../components/organisms/Form/Form";
import { ItemList } from "../components/molecules/ItemList/ItemList";
import { Item } from "../types/Item.types";
import Loading from "../components/atoms/Loading/Loading";
import { Button } from "../components/atoms/Button/Button";

export const Home: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();
  const [currentItems, setCurrentItems] = useState<Item[] | null>(null);

  const handleAddItem = (data: { title: string; body: string }) => {
    mutation.mutate(data, {
      onSuccess: (newItem) => {
        setCurrentItems([newItem]);
      },
    });
  };
  const handleShowAllItems = () => {
    setCurrentItems(null);
  };

  if (isLoading) {
    return <Loading size="w-12 h-12" color="fill-violet-500" />;
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      {mutation.isLoading ? (
        <Loading size="w-12 h-12" color="fill-violet-500" />
      ) : (
        <Form onSubmit={handleAddItem} />
      )}
      <h2 className="text-xl font-bold mt-6 mb-5">Items List</h2>
      {currentItems && (
        <Button
          variant="secondary"
          className="mb-5"
          onClick={handleShowAllItems}
        >
          Show All Items
        </Button>
      )}
      <ItemList items={currentItems || items || []} />
    </div>
  );
};
