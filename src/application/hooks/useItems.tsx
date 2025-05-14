import { useQuery } from 'react-query';
import { fetchItems } from '../../infrastructure/repositories/itemRepository';
import { Item } from '../../domain/models/item';

export const useItems = () => {
  return useQuery<Item[], Error>('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
