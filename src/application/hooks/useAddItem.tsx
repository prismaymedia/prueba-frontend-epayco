import { useMutation, useQueryClient } from 'react-query';
import { addItem } from '../../domain/use-cases/addItem';
import { Item } from '../../domain/models/item';

export const useAddItem = () => {
  
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: (newItem) => {
      queryClient.setQueryData<Item[]>('items', (oldItems) => {
        return oldItems ? [newItem, ...oldItems] : [newItem];
      });
    },
  });
};