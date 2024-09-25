import axios from "axios";
import {ItemBase, ItemDto} from "../types/Item";

export const fetchItems = async () => {
  try {
    const response = await axios.get<ItemBase[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return response.data;
  } catch (err) {
    throw new Error("Ha ocurrido un error al cargar los datos");
  }
};

export const addItem = async (newItem: ItemDto) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newItem,
  );
  return response.data;
};
