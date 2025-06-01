import { useMutation, useQueryClient } from 'react-query';
import { addItem } from '../services/posts';

const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export {
    useAddItem
}