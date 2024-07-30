import React from 'react';
import { useQueryClient } from 'react-query';
import { useItems, useAddItem } from '../../hooks/useItems';
import Form from '../molecules/Form';
import ItemList from '../organisms/ItemList';

const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();

  const onSubmit = (data: { title: string; body: string }) => {
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 max-w-lg w-full bg-gradient-to-tr from-[#BBBBBB] to-[#FFFFFF] rounded-lg shadow-md text-left h-[90vh] overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
        <Form onSubmit={onSubmit} />
        <h2 className="text-xl font-bold mb-4">Items List</h2>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Home;
