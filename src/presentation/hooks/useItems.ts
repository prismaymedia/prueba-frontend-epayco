import { useQuery } from "react-query";
import { fetchItems } from "../../domain/fetchItems";
import { Item } from "../../infrastructure/Item";


export const useItems = () => {
  return useQuery<Item[], Error>('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

