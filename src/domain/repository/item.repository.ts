import { AddItemDto } from "../../application/dto/item.dto";
import { Item } from "../models/Item";

export interface ItemRepository {
    addItem: (item: AddItemDto) => Promise<void>
    getItem: () => Promise<Item[]>
}