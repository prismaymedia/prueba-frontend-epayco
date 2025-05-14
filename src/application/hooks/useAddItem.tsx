import { useMutation, useQueryClient } from 'react-query';
import { addItemToApi } from '../../infrastructure/repositories/itemRepository';
import { Item } from '../../domain/models/item';

export const useAddItem = () => {
  
  const queryClient = useQueryClient();

  return useMutation(addItemToApi, {
    onSuccess: (newItem) => {
      queryClient.setQueryData<Item[]>('items', (oldItems) => {
        return oldItems ? [newItem, ...oldItems] : [newItem];
      });
    },
  });
};