import axios from "axios";
import { Item } from "../types/Item.types";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export const addItem = async (newItem: Omit<Item, "id">): Promise<Item> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newItem
  );
  return response.data;
};
