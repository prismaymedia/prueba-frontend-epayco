
import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/post-repository";
import { axiosInstance } from "../http/axios-instance";

export class PostApiRepository  implements PostRepository {
  async fetchItems(): Promise<Post[]> {
     const response = await axiosInstance.get<Post[]>("/posts");
      return response.data;
 
 }

  async addItem(newItem: Post): Promise<Post> {
    const response = await axiosInstance.post<Post>("/posts", newItem);
    return response.data;
       
  }
};
