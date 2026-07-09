import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAddItem } from './useAddItem';
import type { Item } from '@/domain/models/Item';
import { describe, it, expect } from 'vitest';

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

describe('useAddItem', () => {
    it('calls mutation with provided item', async () => {
        const newItem: Item = {
            id: 1,
            title: 'Test title',
            body: 'Test body',
            userId: 123,
        };

        const { result } = renderHook(() => useAddItem(), {
            wrapper: createWrapper(),
        });

        result.current.mutate(newItem);

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });
    });
});
