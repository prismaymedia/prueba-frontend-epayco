import { Item } from '../entities/Item';
import { IItemRepository } from '../interfaces/IItemRepository';

export class AddItemUseCase {
  constructor(private itemRepository: IItemRepository) {}

  async execute(item: Omit<Item, 'id'>): Promise<Item> {
    return await this.itemRepository.create(item);
  }
}