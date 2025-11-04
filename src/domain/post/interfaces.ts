import { Post, CreatePost } from './types';

export interface PostRepository {
    getPosts(): Promise<Post[]>;
    createPost(post: CreatePost): Promise<Post>;
}