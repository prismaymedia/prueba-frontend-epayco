import axios from "axios";
import { POSTS_API_URL } from "./api-url";

export const addItem = async (newItem: Item) => {
    try {
        const response = await axios.post(POSTS_API_URL, newItem);
        return response.data;
    } catch (error) {
        throw new Error("Failed to add item");
    }
};
