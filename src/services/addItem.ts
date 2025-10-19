import { CreateItemDTO, ItemProps } from "@/components/posts/types";
import axios from "axios";

export const addItem = async (newItem: CreateItemDTO): Promise<ItemProps> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newItem
  );
  return response.data;
};
