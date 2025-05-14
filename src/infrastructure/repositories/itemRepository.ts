import axios from 'axios';
import {Item} from '../../domain/models/item';

//TODO: move api url to .env
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const addItemToApi = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
}
