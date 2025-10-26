import apiClient from './apiClient';
import { Item, CreateItemRequest } from '../types';

class ItemsService {
  async getItems(): Promise<Item[]> {
    return apiClient.get<Item[]>('/posts');
  }

  async createItem(itemData: CreateItemRequest): Promise<Item> {
    return apiClient.post<Item>('/posts', itemData);
  }
}

export default new ItemsService();
