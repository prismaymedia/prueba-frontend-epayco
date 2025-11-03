import { Item } from "../infrastructure/Item";
import { addItemAPI } from "../infrastructure/itemRepository";


export const addItem = async (newItem: Item): Promise<Item> => {
  return await addItemAPI(newItem);
};