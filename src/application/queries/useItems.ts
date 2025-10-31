import { useQuery } from 'react-query';
import { Item } from '../../domain/entities/Item';

export function useItems(fetchItems: () => Promise<Item[]>) {
  return useQuery<Item[], Error>(['items'], fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
}
