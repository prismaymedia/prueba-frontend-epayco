import { useQuery, useQueryClient, useMutation } from 'react-query';
import axios from 'axios';

const fetchItems = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  };
  
  const addItem = async (newItem:any) => {
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
      onSuccess: () => {
        queryClient.invalidateQueries('items');
      },
    });
  };
  