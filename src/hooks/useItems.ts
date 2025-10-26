import { useQuery } from 'react-query';
import { itemsService } from '../services';
import { Item } from '../types';

export const useItems = () => {
  return useQuery<Item[]>('items', itemsService.getItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
