import axios from 'axios';
import { Item } from './Item';

export const fetchItemsAPI = async (): Promise<Item[]> => {
  const response = await axios.get<Item[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export const addItemAPI = async (newItem: Item): Promise<Item> => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};