import { useQuery } from 'react-query';
import { fetchItems } from '../services/itemService';
import { Item } from '../interfaces/Item.interface';

// Hook para obtener ítems con react-query
const useItems = () => {
  return useQuery<Item[], Error>('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export default useItems;
