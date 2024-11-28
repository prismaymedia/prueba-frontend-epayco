import { Item, newItem } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export class AddItemUseCase {
  private itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute(newItem: newItem): Promise<Item> {
    if (!newItem.title || !newItem.body) {
      throw new Error("El título y el cuerpo del ítem son obligatorios.");
    }

    return await this.itemRepository.addItem(newItem);
  }
}
