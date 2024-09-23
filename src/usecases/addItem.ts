import axios from 'axios';
import { FormData, ItemData } from '../domain/models/ItemData';

export const addItem = async (newItem: FormData): Promise<ItemData> => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};