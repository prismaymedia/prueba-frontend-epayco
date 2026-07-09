import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '@/infrastructure/services/itemService';
import type { Item } from '@/domain/models/Item';

export const useItems = () =>
    useQuery<Item[], Error>({
        queryKey: ['items'],
        queryFn: fetchItems,
        staleTime: 1000 * 60 * 5,
    });
