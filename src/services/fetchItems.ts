import axios from 'axios';
import { ItemInterface } from '../types/item';

export const fetchItems = async ():Promise<ItemInterface[]> => {
  const response = await axios.get(import.meta.env.VITE_URL_API);
  return response.data;
};