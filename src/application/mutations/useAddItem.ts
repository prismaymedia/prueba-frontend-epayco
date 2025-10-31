import { useMutation, useQueryClient } from 'react-query';
import { Item } from '../../domain/entities/Item';

export function useAddItem(addItem: (input: Omit<Item, 'id'>) => Promise<Item>) {
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: (createdItem: Item) => {
      queryClient.setQueryData<Item[]>(['items'], [createdItem]);
    },
  });
}


