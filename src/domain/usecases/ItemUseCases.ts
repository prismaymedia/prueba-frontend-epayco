import { Item } from '../entities/Item';
import { ItemRepository } from '../repositories/ItemRepository';

export class GetAllItemsUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(): Promise<Item[]> {
    return await this.itemRepository.getAll();
  }
}

export class CreateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(title: string, body: string): Promise<Item> {
    const itemData = Item.create(title, body);
    return await this.itemRepository.create(itemData);
  }
}
