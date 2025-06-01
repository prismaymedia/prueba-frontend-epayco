import axios from "axios";
import { POSTS_API_URL } from "./api-url";

export const fetchItems = async () => {
    const response = await axios.get(POSTS_API_URL);
    return response.data;
};
