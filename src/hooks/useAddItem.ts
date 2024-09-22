import { useMutation, useQueryClient } from 'react-query';
import { addItem } from '../services/itemService';

// Hook para agregar un ítem y refrescar la lista
const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useAddItem;
