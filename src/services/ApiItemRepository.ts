import axios from 'axios';
import { Item } from '../domain/entities/Item';
import { ItemRepository } from '../domain/repositories/ItemRepository';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export class ApiItemRepository implements ItemRepository {
  async getAll(): Promise<Item[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      return response.data.map((item: any) => new Item(item.id, item.title, item.body, item.userId));
    } catch (error) {
      throw new Error('Error al obtener los elementos');
    }
  }

  async create(item: Omit<Item, 'id'>): Promise<Item> {
    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, item);
      return new Item(response.data.id, response.data.title, response.data.body, response.data.userId);
    } catch (error) {
      throw new Error('Error al crear el elemento');
    }
  }
}
