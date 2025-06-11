import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddItemForm } from '../organisms/AddItemForm';
import { ItemList } from '../organisms/ItemList';

interface Item {
  id: number;
  title: string;
  body: string;
}

const fetchItems = async (): Promise<Item[]> => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch items');
  }
};

const addItem = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
    return data;
  } catch (error) {
    throw new Error('Failed to add item');
  }
};

export const Home: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: items, error, isLoading } = useQuery<Item[]>('items', fetchItems);

  const mutation = useMutation(addItem, {
    onSuccess: (newItem) => {
      queryClient.setQueryData<Item[]>('items', (oldItems = []) => [newItem, ...oldItems]);
    },
  });

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-red-600">Error: {(error as Error).message}</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Items Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <AddItemForm
            onSubmit={(data) => mutation.mutate(data as Omit<Item, 'id'>)}
            isLoading={mutation.isLoading}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Items List</h2>
          <h3 className="text-sm text-gray-500 mb-4">
            Showing {items?.length} items
          </h3>
          <div className="flex flex-col gap-4 border border-gray-300 rounded-md p-4">
            <ItemList items={items || []} />
          </div>
        </div>
      </div>
    </div>
  );
}; 