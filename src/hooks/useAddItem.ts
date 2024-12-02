import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../domain/usecases/addItemUseCase";


export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
};