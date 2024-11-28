import { useMutation, useQueryClient } from "react-query";
import { ItemRepositoryImpl } from "../data/repositories/ItemRepositoryImpl";
import { AddItemUseCase } from "../application/usecases/AddItemUseCase";
import { newItem } from "../domain/entities/Item";

const repository = new ItemRepositoryImpl();
const addItemUseCase = new AddItemUseCase(repository);

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newItem: newItem) => {
      return await addItemUseCase.execute(newItem);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("items");
      },
    }
  );
};
