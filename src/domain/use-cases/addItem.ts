import { Item } from "../models/item";
import {addItemToApi} from "../../infrastructure/repositories/itemRepository";

export const addItem = async (item: Omit<Item, 'id'>) => {
  return addItemToApi(item);
};