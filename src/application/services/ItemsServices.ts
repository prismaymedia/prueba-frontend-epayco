import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchItems, addItem } from '@/infrastructure/api/ItemsAPI';
import { staleTime, cacheTime } from '@/shared/config';
import { ItemType } from '@/shared/types';

const useItems = () => {
    return useQuery<ItemType[], Error>('items', fetchItems, {
      staleTime,
      cacheTime,
    });
  };
  
const useAddItem = () => {
    const queryClient = useQueryClient();

    return useMutation(addItem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items');
        },
    });
};

export { useItems, useAddItem };