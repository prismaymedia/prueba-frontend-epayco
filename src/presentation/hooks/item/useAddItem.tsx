import { useMutation } from "react-query";
import { ItemRepositoryImpl } from "../../../infrastructure/repository/ItemRepositoryImpl";
import { AddItemUseCase } from "../../../application/useCases/addItem.usecase";
import { AddItemDto } from "../../../application/dto/item.dto";
import { Item } from "../../../domain/models/Item";

export const useAddItem = (setLatestItem: (item: Item) => void) => {
  const itemRepository = new ItemRepositoryImpl();
  const addItemUseCase = new AddItemUseCase(itemRepository);

  return useMutation<any, Error, AddItemDto>(
    async (data) => {
      await addItemUseCase.execute(data);

      const newItem = {
        id: Date.now(),
        ...data
      };
      return newItem;
    },
    {
      onSuccess: (newItem) => {
        setLatestItem(newItem);
      },
    }
  );
};