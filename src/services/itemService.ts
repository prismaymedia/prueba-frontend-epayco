import axios from 'axios';
import { Item } from '../components/molecules/ItemCard';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw new Error('Failed to fetch items');
  }
};

export const addItem = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
  try {
    const response = await axios.post(API_URL, newItem);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw new Error('Failed to add item');
  }
};
