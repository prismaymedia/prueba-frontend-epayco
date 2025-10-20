import { Item } from '../entities/Item';
import { IItemRepository } from '../interfaces/IItemRepository';

export class GetItemsUseCase {
  constructor(private itemRepository: IItemRepository) {}

  async execute(): Promise<Item[]> {
    return await this.itemRepository.getAll();
  }
}