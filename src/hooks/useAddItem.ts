import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ItemRepository } from '@infrastructure/repositories/ItemRepository';
import { AddItemUseCase } from '@domain/usecases/AddItemUseCase';
import { Item } from '@domain/entities/Item';

const itemRepository = new ItemRepository();
const addItemUseCase = new AddItemUseCase(itemRepository);

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: Omit<Item, 'id'>) => addItemUseCase.execute(item),
    onSuccess: (newItem) => {
      queryClient.setQueryData(['items'], [newItem]);
    },
  });
};