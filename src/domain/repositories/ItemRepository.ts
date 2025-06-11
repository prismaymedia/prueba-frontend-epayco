import { Item } from '../entities/Item';

export interface ItemRepository {
  getAll(): Promise<Item[]>;
  create(item: Omit<Item, 'id'>): Promise<Item>;
}
