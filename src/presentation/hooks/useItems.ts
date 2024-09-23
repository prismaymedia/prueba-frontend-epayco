import { useQuery } from 'react-query';
import { fetchItems } from '../../infrastructure/api/itemApi';
import { ItemData } from '../../domain/models/ItemData';

export const useItems = () => {
  return useQuery<ItemData[], Error>('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};