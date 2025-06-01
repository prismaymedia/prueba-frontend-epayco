import { createContext } from "react";
import { Post } from "../../models/post";

export interface PostsContextType {
  posts: Post[];
  isLoading: boolean;
  error: boolean;
  addPost: (title: string, body: string) => Promise<void>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export {
  PostsContext,
}
