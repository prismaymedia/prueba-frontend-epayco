import axios from 'axios';
import { Item, NewItem } from '../types/item';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addItem = async (newItem: NewItem): Promise<Item> => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
};