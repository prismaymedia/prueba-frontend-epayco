import { create } from 'zustand';
import type { Item } from '@/domain/models/Item';

interface ItemStore {
    items: Item[];
    currentPage: number;
    pageSize: number;
    setItems: (items: Item[]) => void;
    loadNextPage: () => void;
    addItemAndReset: (item: Item) => void;
}

export const useItemStore = create<ItemStore>((set, get) => ({
    items: [],
    currentPage: 1,
    pageSize: 10,
    setItems: (items) => set({ items, currentPage: 1 }),
    loadNextPage: () => {
        const { currentPage, items, pageSize } = get();
        const maxPages = Math.ceil(items.length / pageSize);
        if (currentPage < maxPages) {
            set({ currentPage: currentPage + 1 });
        }
    },
    addItemAndReset: (item) => set({ items: [item], currentPage: 1 }),
}));
