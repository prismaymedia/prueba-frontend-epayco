import axios from 'axios';

import { API_URL_JSON_PLACE_HOLDER } from '../constants';
import { Item, ResponseItem, ResponseItems, NewItem } from 'types';

export async function fetchItems (): Promise<Item[]> {
  try {
    const { data }: ResponseItems = await axios.get(API_URL_JSON_PLACE_HOLDER)

    return data.map((item: Item) => {
      const { id, userId, title, body } = item

      return {
        id,
        userId,
        title,
        body,
      }
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }

    throw new Error("Failed to fetch items from the API jsonplaceholder")
  }
}

export async function addItem (newItem: NewItem): Promise<Item> {
  try {
    const { data }: ResponseItem = await axios.post(API_URL_JSON_PLACE_HOLDER, newItem)
    const { id, userId, title, body } = data

    return {
      id,
      userId,
      title,
      body,
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }

    throw new Error("Failed to add item to the API jsonplaceholder")
  }
}
