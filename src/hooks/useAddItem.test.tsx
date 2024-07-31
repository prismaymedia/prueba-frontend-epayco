import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, HttpResponse } from 'msw'

import { ITEM, ITEMS, NEW_ITEM } from 'mocks/data'
import { server } from 'mocks/server'
import { API_URL_JSON_PLACE_HOLDER } from '../constants'
import { useItems } from './useItems'
import { useAddItem } from './useAddItem'

describe('useItems Hook', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
  })

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  test('useAddItem adds an item and updates the cache', async () => {
    const { result } = renderHook(useAddItem, { wrapper })

    await waitFor(async () => {
      result.current.mutate(NEW_ITEM)
    });

    const items = queryClient.getQueryData(['items'])
    expect(items).toStrictEqual([ITEM])
  })

  test('useAddItem handles error and reverts to previous state', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())
    server.use(
      http.post(API_URL_JSON_PLACE_HOLDER, () => {
        return HttpResponse.error()
      })
    )

    const { result: resultItems } = renderHook(useItems, { wrapper })
    const { result: resultAddItem } = renderHook(useAddItem, { wrapper })

    await waitFor(() => {
      expect(resultItems.current.isLoading).toBe(false)
      resultAddItem.current.mutate(NEW_ITEM)
      expect(resultAddItem.current.isError).toBe(true)
    })

    const items = queryClient.getQueryData(['items'])
    expect(items).toStrictEqual(ITEMS)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Network Error')

    consoleErrorSpy.mockRestore()
  })
})
