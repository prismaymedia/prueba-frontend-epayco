import React, { useState, useEffect } from 'react';
import { useFetchItems } from '../hooks/useFetchItems';
import { useAddItem } from '../hooks/useAddItem';
import HomeTemplate from '../components/templates/HomeTemplate';
import { Item } from '../components/molecules/ItemCard';
import { AddItemError } from '../types/types';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { data: fetchedItems = [], error, isLoading } = useFetchItems();

  const { mutate: addItem } = useAddItem(
    (newItem: Item) => {
      setItems([newItem]);
    },
    (error: AddItemError) => {
      console.error('Error adding item:', error.message);
    }
  );

  useEffect(() => {
    if (!isLoading && !error) {
      setItems([...(fetchedItems as Item[])]);
    }
  }, [isLoading, error, fetchedItems]);

  const handleAddItem = (data: { title: string; body: string }) => {
    addItem(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    const errorMessage = (error as AddItemError).message || 'An unknown error occurred';
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <HomeTemplate items={items} onAddItem={handleAddItem} />
  );
};

export default Home;
