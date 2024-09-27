// src/hooks/useFetchItems.ts
import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../services/itemService';
import { Item } from '../components/molecules/ItemCard';

export const useFetchItems = () => {
  return useQuery<Item[]>(['items'], fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, 
    refetchOnWindowFocus: true, 
    refetchOnReconnect: true, 
    retry: 3, 
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error('Error fetching items:', error.message);
      } else {
        console.error('An unexpected error occurred while fetching items');
      }
    },
  });
};
