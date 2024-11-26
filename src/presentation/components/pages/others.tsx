import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const fetchItems = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const addItem = async (newItem) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};

const useItems = () => {
  return useQuery('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const { register, handleSubmit, reset } = useForm();
  const mutation = useAddItem();

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Title" required />
        <textarea {...register('body')} placeholder="Body" required />
        <button type="submit">Add Item</button>
      </form>
      <h2>Items List</h2>
      <ItemList items={items} />
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);