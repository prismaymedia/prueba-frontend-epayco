import { useMutation, useQuery, useQueryClient } from "react-query";
import { addItem, fetchItems } from "../services/Item.ts";
import { ItemBase } from "../types/Item";

export const useItem = () => {
  const fiveMinutes = 1000 * 60 * 5;
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery<ItemBase[], Error>("items", fetchItems, {
    staleTime: fiveMinutes,
    cacheTime: fiveMinutes * 2,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(addItem, {
    onSuccess: (newItem) => {
      queryClient.setQueryData("items", [newItem]);
    },
  });

  return { mutate, items, isLoading, isError };
};
