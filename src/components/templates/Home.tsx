import React from 'react';
import ItemList from '../organisms/ItemList';
import FormItem from '../molecules/FormItem';
import Alert from '../atoms/Alert';
import Skeleton from '../atoms/Skeleton';
import { Item } from '../../types/itemType';

interface Props {
  items?: Item[];
  error?: string;
  isLoading: boolean;
  onSubmit: (data: Item) => void;
  message: string;
  setMessage: (value: string) => void;
}

const Home: React.FC<Props> = ({
  items,
  error,
  isLoading,
  onSubmit,
  message,
  setMessage
}) => {

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className='p-10 pr-10 max-w-4xl mx-auto shadow-gray-200 shadow-lg relative bg-white'>
      {message && <Alert message={message} onClose={() => setMessage('')} />}
      <FormItem onSubmit={onSubmit} />
      <hr className='mt-3 text-gray-200' />
      <ItemList
        title='Items List'
        items={items || []}
      />
    </section>
  );
};

export default Home;
