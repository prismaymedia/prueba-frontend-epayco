import React, { useState } from 'react';
import { useItems } from '../../hooks/useItems';
import { useAddItem } from '../../hooks/useAddItem';
import ItemList from '../organisms/ItemList';
import ItemForm from '../molecules/ItemForm';
import { FormData, ItemData } from '../../../domain/models/ItemData';
import Alert from '../atoms/Alert';

const Home: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();
  const [newItem, setNewItem] = useState<ItemData | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: (item) => {
        setNewItem(item)
        setSuccessMessage('item created successfully');
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center">Add New Item</h1>
      <ItemForm onSubmit={handleSubmit} />
      {successMessage && (<Alert successMessage={successMessage} setSuccessMessage={setSuccessMessage} />)}
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-center">Items List</h2>
      {newItem ? (
        <ItemList items={[newItem]} />
      ) : (
        items && <ItemList items={items} />
      )}
    </div>
  );
};

export default Home;