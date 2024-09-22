import axios, { AxiosResponse } from 'axios';
import { Item } from '../interfaces/Item.interface';
import { BehaviorSubject } from 'rxjs';

const itemsSubject = new BehaviorSubject<Item[]>([]);

export const items$ = itemsSubject.asObservable();

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response: AxiosResponse<Item[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
    itemsSubject.next(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error; 
  }
};


export const addItem = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
  try {
    const response: AxiosResponse<Item> = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
    
    const currentItems = itemsSubject.getValue();
    itemsSubject.next([...currentItems, response.data]); 
    return response.data; 
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; 
  }
};
