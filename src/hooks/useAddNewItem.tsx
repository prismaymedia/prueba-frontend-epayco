// src/hooks/useAddItem.ts
import { useMutation, useQueryClient } from 'react-query';
import { addItem } from '../services/itemServices';

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};