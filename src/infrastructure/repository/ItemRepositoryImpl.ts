import axios from 'axios';
import { Item } from '../../domain/models/Item';
import { ItemRepository } from '../../domain/repository/item.repository';
import { AddItemDto } from '../../application/dto/item.dto';
// import { AddItemDto } from '../../application/dto/item.dto';

export class ItemRepositoryImpl implements ItemRepository {

    private baseURL = "https://jsonplaceholder.typicode.com/posts";

    async getItem(): Promise<Item[]> {
        const response = await axios.get(this.baseURL);
        return response.data;
    }

    async addItem(newItem: AddItemDto): Promise<void> {
        const response = await axios.post(this.baseURL, newItem);
        return response.data;
    }

}