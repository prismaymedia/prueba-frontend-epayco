import { Post } from "../domain/model/interfaces";
import axiosInstance from "../infrastructure/http/axiosInstance";

// Función para obtener datos
export const fetchItems = async (): Promise<Post[]> => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

// Función para agregar un nuevo elemento
export const addItem = async (newItem: Omit<Post, "id">): Promise<Post> => {
  const response = await axiosInstance.post("/posts", newItem);
  return response.data;
};