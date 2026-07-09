import { useState } from 'react';
import type { Item } from '@/domain/models/Item';

export const useItemDisplayStrategy = (fetchedItems: Item[] = []) => {
    const [addedItem, setAddedItem] = useState<Item | null>(null);

    const itemsToRender = addedItem ? [addedItem] : fetchedItems;

    return {
        itemsToRender,
        setAddedItem,
        hasAddedItem: !!addedItem,
    };
};
