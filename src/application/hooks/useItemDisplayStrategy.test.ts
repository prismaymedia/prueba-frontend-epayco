import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useItemDisplayStrategy } from './useItemDisplayStrategy';
import type { Item } from '@/domain/models/Item';

const mockItems: Item[] = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    body: `Body ${i + 1}`,
    userId: 1,
}));

describe('useItemDisplayStrategy', () => {
    it('returns fetched items when no item has been added', () => {
        const { result } = renderHook(() => useItemDisplayStrategy(mockItems));
        expect(result.current.itemsToRender).toEqual(mockItems);
        expect(result.current.hasAddedItem).toBe(false);
    });

    it('returns only the added item when addedItem is set', () => {
        const { result } = renderHook(() => useItemDisplayStrategy(mockItems));

        const newItem: Item = {
            id: 999,
            title: 'New Item',
            body: 'New Body',
            userId: 2,
        };

        act(() => {
            result.current.setAddedItem(newItem);
        });

        expect(result.current.itemsToRender).toEqual([newItem]);
        expect(result.current.hasAddedItem).toBe(true);
    });
});
