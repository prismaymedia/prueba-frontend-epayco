import { useQuery, UseQueryResult } from "react-query";
import { fetchItems } from "../../services/fetchItems";
import { ItemInterface } from "../../types/item";

export const useItems: () => UseQueryResult<ItemInterface[]> = () => {
  return useQuery<ItemInterface[]>('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};