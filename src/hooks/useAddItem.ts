import { useMutation, useQueryClient } from 'react-query';
import { addItem } from '../services/api';
import { Item } from '../types/itemType';

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, Item>(addItem, {
    onSuccess: (item) => {
      queryClient.setQueryData<Item[]>("items", [item]);
    },
  });
};