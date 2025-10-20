import { Item } from '../entities/Item';

export interface IItemRepository {
  getAll(): Promise<Item[]>;
  create(item: Omit<Item, 'id'>): Promise<Item>;
}