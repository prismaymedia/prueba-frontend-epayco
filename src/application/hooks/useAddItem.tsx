import { useMutation, useQueryClient } from 'react-query';
import { addItemToApi } from '../../infrastructure/repositories/itemRepository';

export const useAddItem = () => {
  
  const queryClient = useQueryClient();

  return useMutation(addItemToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};