import { Post } from "../entities/post";


export interface PostRepository {
  fetchItems(): Promise<Post[]>;
  addItem(newItem: Post): Promise<Post>;
}