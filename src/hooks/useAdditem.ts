import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItem } from "../services/ItemService";
import type { Item } from "../types/Item";

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, unknown, Omit<Item, "id">>({
    mutationFn: createItem,
    onSuccess: (newItem) => {
      queryClient.setQueryData<Item[]>(["items"], () => [newItem]);
    },
  });
};
