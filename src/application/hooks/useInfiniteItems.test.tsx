import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useInfiniteItems } from './useInfiniteItems';
import { fetchAllItems } from '@/infrastructure/services/itemService';
import { useItemStore } from '@/stores/useItemStore';
import type { Item } from '@/domain/models/Item';
import type { Mock } from 'vitest';

vi.mock('@/infrastructure/services/itemService', async () => {
    return {
        fetchAllItems: vi.fn(),
    };
});

vi.mock('@/stores/useItemStore');

const mockItems: Item[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    body: `Body ${i + 1}`,
    userId: 1,
}));

describe('useInfiniteItems', () => {
    const setItems = vi.fn();

    beforeEach(() => {
        vi.resetAllMocks();

        const mockStoreState = {
            setItems,
            currentPage: 2,
            pageSize: 10,
            items: mockItems,
        };

        (useItemStore as unknown as Mock).mockImplementation((selector: (state: typeof mockStoreState) => unknown) =>
            selector(mockStoreState)
        );

        (fetchAllItems as Mock).mockResolvedValue(mockItems);
    });

    it('returns paginated items and hasMore=true', async () => {
        const { result } = renderHook(() => useInfiniteItems());

        await waitFor(() => {
            expect(result.current.visibleItems).toHaveLength(20);
            expect(result.current.hasMore).toBe(true);
        });

        expect(setItems).toHaveBeenCalledWith(mockItems);
    });

    it('returns hasMore=false when all items are visible', async () => {
        const fewerItems: Item[] = mockItems.slice(0, 10);

        const altStore = {
            setItems,
            currentPage: 1,
            pageSize: 10,
            items: fewerItems,
        };

        (useItemStore as unknown as Mock).mockImplementation((selector: (s: typeof altStore) => unknown) =>
            selector(altStore)
        );

        const { result } = renderHook(() => useInfiniteItems());

        await waitFor(() => {
            expect(result.current.visibleItems).toHaveLength(10);
            expect(result.current.hasMore).toBe(false);
        });
    });
});
