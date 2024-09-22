import { useMutation, useQuery, useQueryClient } from "react-query";
import { addItem, fetchItems } from "../data";

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
};

export const useItems = () => {
  return useQuery("items", fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
