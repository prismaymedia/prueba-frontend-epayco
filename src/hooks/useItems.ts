import { useQuery, useMutation, useQueryClient } from "react-query";
import { itemsApi } from "../api/itemsApi";
import { Item } from "../types/item";

export const useItems = () => {
  return useQuery<Item[], Error>("items", itemsApi.getItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, Item>(
    (newItem) => itemsApi.addItem(newItem),
    {
      onSuccess: (newItem) => {
        const previousItems = queryClient.getQueryData<Item[]>("items") || [];
        const filteredItems = previousItems.filter(
          (item) => item.id !== newItem.id
        );
        queryClient.setQueryData<Item[]>("items", [...filteredItems, newItem]);
      },
    }
  );
};
