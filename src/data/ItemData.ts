import axios from "axios";
import { ItemData } from "../components";

export const addItem = async (
  newItem: Omit<ItemData, "id">
): Promise<ItemData> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newItem
  );
  return response.data;
};

export const fetchItems = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
