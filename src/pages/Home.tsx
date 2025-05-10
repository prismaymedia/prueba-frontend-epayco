import { useState } from 'react';
import { useItems, useAddItem } from '../hooks/useItems';
import ItemList from '../components/organisms/ItemList';
import AddItemForm from '../components/organisms/AddItemForm';
import { Item, NewItem } from '../types/item';

const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const [newestItem, setNewestItem] = useState<Item | null>(null);
  const mutation = useAddItem();

  const handleAddItem = (item: NewItem) => {
    mutation.mutate(item, {
      onSuccess: (data) => {
        setNewestItem(data);
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <h2 className="text-xl font-semibold mt-6">Items List</h2>
      {newestItem ? (
        <ItemList items={[newestItem]} />
      ) : (
        items && <ItemList items={items} />
      )}
    </div>
  );
};

export default Home;
