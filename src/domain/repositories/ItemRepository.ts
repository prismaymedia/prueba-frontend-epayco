import { Item, newItem } from "../entities/Item";

export interface ItemRepository {
  fetchItems(): Promise<Item[]>;
  addItem(newItem: newItem): Promise<Item>;
}
