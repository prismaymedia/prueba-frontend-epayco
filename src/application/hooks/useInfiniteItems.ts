import { useEffect } from 'react';
import { fetchAllItems } from '@/infrastructure/services/itemService';
import { useItemStore } from '@/stores/useItemStore';

export const useInfiniteItems = () => {
    const setItems = useItemStore((state) => state.setItems);
    const currentPage = useItemStore((state) => state.currentPage);
    const pageSize = useItemStore((state) => state.pageSize);
    const items = useItemStore((state) => state.items);

    const visibleItems = items.slice(0, currentPage * pageSize);
    const hasMore = visibleItems.length < items.length;

    useEffect(() => {
        const load = async () => {
            const all = await fetchAllItems();
            if (Array.isArray(all) && all.length > 0) {
                setItems(all);
            }
        };
        load();
    }, [setItems]);

    return { visibleItems, hasMore };
};
