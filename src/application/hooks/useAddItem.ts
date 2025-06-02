import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItem } from '@/infrastructure/services/itemService';

export const useAddItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
        },
    });
};
