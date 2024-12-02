import { Item } from "../models/Item";

export const addItem = async (item: Item): Promise<Item> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};