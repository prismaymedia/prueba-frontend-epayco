import { useMutation, useQueryClient } from 'react-query';
import { itemsService } from '../services';
import { CreateItemRequest, Item } from '../types';

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, CreateItemRequest>(itemsService.createItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};
