import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchItems = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const addItem = async (newItem: { title: string; body: string }) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};

export const useItems = () => {
  return useQuery('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: (newItem) => {
      queryClient.setQueryData('items', [newItem]);
    },
  });
};
