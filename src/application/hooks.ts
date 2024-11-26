import { useQuery, useMutation, useQueryClient } from "react-query";
import { addItem, fetchItems } from "./api";

// Hook para obtener elementos
export const useItems = () => {
  return useQuery('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

// Hook para agregar un nuevo elemento
export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
};
