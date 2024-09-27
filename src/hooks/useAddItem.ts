import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItem } from '../services/itemService';
import { Item } from '../components/molecules/ItemCard';
import { AddItemError } from '../types/types';

export const useAddItem = (
  onSuccess: (newItem: Item) => void,
  onError: (error: AddItemError) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addItem,
    onSuccess: (newItem) => {
      onSuccess(newItem);
      queryClient.setQueryData(['items'], (oldItems: Item[] = []) => [newItem, ...oldItems]);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        onError({ message: error.message });
      } else {
        onError({ message: 'An unexpected error occurred' });
      }
    },
  });
};
