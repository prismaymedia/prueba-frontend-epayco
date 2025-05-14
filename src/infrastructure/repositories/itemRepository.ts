import axios from 'axios';
import {Item} from '../../domain/models/item';

//TODO: move api url to .env
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get(API_URL);
    console.log('response get all',response);
    return response.data;
}

export const addItemToApi = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
  console.log('lo qeu va a add item',newItem);
  const response = await axios.post(API_URL, newItem);
  console.log('response add item',response);
  return response.data;
}
