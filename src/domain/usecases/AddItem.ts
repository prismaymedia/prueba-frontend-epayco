import { Item } from '../entities/Item';
import { ItemRepository } from '../repositories/ItemRepository';

export class AddItem {
  private readonly repository: ItemRepository;

  constructor(repository: ItemRepository) {
    this.repository = repository;
  }

  execute(input: Omit<Item, 'id'>): Promise<Item> {
    return this.repository.addItem(input);
  }
}


