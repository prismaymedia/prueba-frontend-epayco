import React, { useState } from "react";
import { ItemList } from "../organisms/ItemList/ItemList";
import { ItemForm } from "../organisms/ItemForm/ItemForm";
import { Item } from "../../domain/models/Item";
import { useItems } from "../../hooks/useItems";
import { Loading } from "../atoms/Loading/Loading";
import { MessageError } from "../atoms/Error/Error";

export const Home: React.FC = () => {
  const [customItems, setCustomItems] = useState<Item[]>([]);
  const { data: items, error, isLoading } = useItems();

  const handleAddItem = (newItem: Item) => {
    setCustomItems((prevItems) => [...prevItems, newItem]);
  };

  if (isLoading) return <Loading />;
  if (error instanceof Error)
    return <MessageError message={error.message} name={error.name} />;

  return (
    <main className="container m-auto px-4">
      <ItemForm onAddItem={handleAddItem} />

      {customItems.length > 0 ? (
        <ItemList items={customItems} />
      ) : (
        items && <ItemList items={items} />
      )}
    </main>
  );
};
