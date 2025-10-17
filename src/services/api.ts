import axios from "axios";
import { API_URL } from "../utils/contants";
import { ItemType } from "../types";

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addItem = async (newItem: ItemType) => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
};
