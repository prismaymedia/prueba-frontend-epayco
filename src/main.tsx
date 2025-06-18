import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// Función para obtener los items
const fetchItems = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

// Función para agregar un item
const addItem = async (newItem: { title: string; body: string }) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};

// Hook personalizado para obtener los items con la nueva firma de React Query v5
const useItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

// Hook personalizado para agregar un item
const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
};

// Componente para mostrar un solo item
const Item = ({ item }: { item: { title: string; body: string } }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

// Lista de items
const ItemList = ({ items }: { items: Array<{ id: number; title: string; body: string }> }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

// Componente principal
const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const { register, handleSubmit, reset } = useForm();
  const mutation = useAddItem();

  const onSubmit = (data: { title: string; body: string }) => {
    mutation.mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Title" required />
        <textarea {...register('body')} placeholder="Body" required />
        <button type="submit">Add Item</button>
      </form>
      <h2>Items List</h2>
      <ItemList items={items ?? []} />
    </div>
  );
};

// Instancia de React Query
const queryClient = new QueryClient();

// App principal con proveedor
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

// Renderizar en el DOM
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'.");
}
