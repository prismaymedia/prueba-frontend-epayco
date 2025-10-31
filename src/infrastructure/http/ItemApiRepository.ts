import axios from 'axios';
import { Item } from '../../domain/entities/Item';
import { ItemRepository } from '../../domain/repositories/ItemRepository';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export class ItemApiRepository implements ItemRepository {
  async fetchItems(): Promise<Item[]> {
    const response = await http.get('/posts');
    return response.data as Item[];
  }

  async addItem(input: Omit<Item, 'id'>): Promise<Item> {
    const response = await http.post('/posts', input);
    return response.data as Item;
  }
}
