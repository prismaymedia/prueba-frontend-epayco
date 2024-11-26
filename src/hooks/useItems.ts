import { useQuery } from "react-query";
import { Item } from "../types/Item.types";
import { fetchItems } from "../api/items.api";

export const useItems = () => {
  return useQuery<Item[], Error>("items", fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
