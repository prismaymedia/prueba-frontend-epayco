import axios from 'axios';
import { ItemType } from '@/shared/types';

const fetchItems = async () => {
  const response: {data: ItemType[]} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const addItem = async (newItem: ItemType) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};

export { fetchItems, addItem };
