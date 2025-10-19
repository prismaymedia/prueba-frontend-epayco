import { ItemsArr } from "@/components/posts/types";
import { fetchItems } from "@/services/listItems";
import { useQuery } from "@tanstack/react-query";

export const useItems = () => {
  return useQuery<ItemsArr>({
    queryKey: ["items"],
    queryFn: fetchItems,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
