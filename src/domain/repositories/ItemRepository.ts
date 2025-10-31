import { Item } from '../entities/Item';

export interface ItemRepository {
  fetchItems(): Promise<Item[]>;
  addItem(input: Omit<Item, 'id'>): Promise<Item>;
}


