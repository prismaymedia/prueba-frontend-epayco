import axios from "axios";
import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export class ItemRepositoryImpl implements ItemRepository {
  private baseURL = "https://jsonplaceholder.typicode.com/posts";
  private userId = 10;

  async fetchItems(): Promise<Item[]> {
    const response = await axios.get<Item[]>(this.baseURL, {
      params: {
        userId: this.userId,
      },
    });
    return response.data;
  }

  async addItem(newItem: Item): Promise<Item> {
    const response = await axios.post<Item>(this.baseURL, {
      ...newItem,
      userId: this.userId,
    });
    return response.data;
  }
}
