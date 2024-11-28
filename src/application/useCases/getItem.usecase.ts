import { Item } from "../../domain/models/Item";
import { ItemRepository } from "../../domain/repository/item.repository";

export class GetItemUseCase {

    constructor(
        private itemRepository: ItemRepository,
    ) {
        this.itemRepository = itemRepository;
    }

    async execute(): Promise<Item[]> {
        return this.itemRepository.getItem();
    }
}