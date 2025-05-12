import axios from 'axios';
import { ItemInterface } from '../types/item';

export const addItem = async (newItem:ItemInterface):Promise<ItemInterface> => {
    const response = await axios.post(import.meta.env.VITE_URL_API, newItem);
    return response.data;
};