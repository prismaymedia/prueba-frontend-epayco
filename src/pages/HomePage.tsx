import React, { useState } from 'react';
import Home from '../components/templates/Home';
import { useItems } from '../hooks/useItems';
import { useAddItem } from '../hooks/useAddItem';
import { Item } from '../types/itemType';

const HomePage: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();
  const [message, setMessage] = useState<string>('');

  const onSubmit = (data: Item) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setMessage('Item added successfully.')
      }
    });
  };

  return (
    <div className='bg-gray-50 h-full min-h-screen'>
      <Home
        items={items}
        isLoading={isLoading}
        onSubmit={onSubmit}
        error={error?.message}
        message={message}
        setMessage={setMessage}
      />
    </div>
  )
};

export default HomePage;
