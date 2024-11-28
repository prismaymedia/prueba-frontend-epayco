import { ItemRepository } from "../../domain/repository/item.repository";
import { AddItemDto } from "../dto/item.dto";

export class AddItemUseCase {

    constructor(
        private itemRepository: ItemRepository,
    ) {
        this.itemRepository = itemRepository;
    }

    async execute(newItem: AddItemDto): Promise<void> {
        return this.itemRepository.addItem(newItem);
    }
}