import { Item } from "../../domain/models/Item";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
