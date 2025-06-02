import axios from 'axios';
import type { Item } from '@/domain/models/Item';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

export const addItem = async (item: Item): Promise<Item> => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', item);
    return response.data;
};

export const fetchAllItems = async (): Promise<Item[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};