import { Item } from '../entities/Item';
import { ItemRepository } from '../repositories/ItemRepository';

export class FetchItems {
  private readonly repository: ItemRepository;

  constructor(repository: ItemRepository) {
    this.repository = repository;
  }

  execute(): Promise<Item[]> {
    return this.repository.fetchItems();
  }
}


