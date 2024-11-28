import { ItemRepository } from "../../domain/repositories/ItemRepository";
import { Item } from "../../domain/entities/Item";

export class GetItemsUseCase {
  private itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute(): Promise<Item[]> {
    return await this.itemRepository.fetchItems();
  }
}
