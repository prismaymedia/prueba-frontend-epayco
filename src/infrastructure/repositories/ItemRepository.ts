import { Item } from '@/domain/entities/Item';
import { IItemRepository } from '@/domain/interfaces/IItemRepository';
import { apiClient } from '../services/api.service';

export class ItemRepository implements IItemRepository {
  async getAll(): Promise<Item[]> {
    const response = await apiClient.get<Item[]>('/posts');
    return response.data;
  }

  async create(item: Omit<Item, 'id'>): Promise<Item> {
    const response = await apiClient.post<Item>('/posts', item);
    return response.data;
  }
}