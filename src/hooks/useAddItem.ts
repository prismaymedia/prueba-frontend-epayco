import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../services/api";
import { ItemType } from "../types";

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onMutate: async (newItem: ItemType) => {
      await queryClient.cancelQueries("items");

      const previousItems = queryClient.getQueryData<ItemType[]>(["items"]);

      queryClient.setQueryData<ItemType[]>(["items"], [{ ...newItem }]);
      return { previousItems };
    },
    onError: (err, newItem, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData<ItemType[]>(["items"], context.previousItems);
      }
    },
  });
};
