import { describe, expect, test, vi } from 'vitest'
import { http, HttpResponse } from 'msw'

import { fetchItems, addItem } from './items'
import { ITEM, ITEMS, NEW_ITEM } from 'mocks/data'
import { server } from 'mocks/server'
import { API_URL_JSON_PLACE_HOLDER } from '../constants'

describe('fetchItems', async () => {
  test('should return items', async () => {
    const result = await fetchItems()
    expect(result).toStrictEqual(ITEMS)
  })

  test('should return an error when the endpoint fails', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())

    server.use(
      http.get(API_URL_JSON_PLACE_HOLDER, () => {
        return HttpResponse.error()
      })
    )

    try {
      await fetchItems()
    } catch (error) {
      expect((error as Error).message).toBe("Failed to fetch items from the API jsonplaceholder")
      expect(consoleErrorSpy).toHaveBeenCalledWith('Network Error')
    }

    consoleErrorSpy.mockRestore()
  })
})

describe('addItem', async () => {
  test('should return the created item', async () => {
    const result = await addItem(NEW_ITEM)

    expect(result).toStrictEqual(ITEM)
  })

  test('should return an error when the endpoint fails', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())

    server.use(
      http.post(API_URL_JSON_PLACE_HOLDER, () => {
        return HttpResponse.error()
      })
    )

    try {
      await addItem(NEW_ITEM)
    } catch (error) {
      expect((error as Error).message).toBe("Failed to add item to the API jsonplaceholder")
      expect(consoleErrorSpy).toHaveBeenCalledWith('Network Error')
    }

    consoleErrorSpy.mockRestore()
  })
})
