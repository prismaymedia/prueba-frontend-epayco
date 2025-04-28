import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/ItemService";
import type { Item } from "../types/Item";

export const useItems = () =>
  useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: getItems,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
