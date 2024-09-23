import axios from 'axios';
import { ItemData } from '../domain/models/ItemData';

export const fetchItems = async (): Promise<ItemData[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};