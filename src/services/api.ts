import { Item } from '../types/itemType';
import apiClient from '../api/apiClient';

export const fetchItems = async (): Promise<Item[]> => {
  const response = await apiClient.get('/posts');
  return response.data;
};

export const addItem = async (newItem: Item): Promise<Item> => {
  const response = await apiClient.post('/posts', newItem);
  return response.data;
};
