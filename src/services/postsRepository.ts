import { axiosClient } from './axiosClient';
import { Post, CreatePost } from '../domain/post/types';
import { PostRepository } from '../domain/post/interfaces';

export class PostsRepository implements PostRepository {
    async getPosts(): Promise<Post[]> {
        const { data } = await axiosClient.get<Post[]>('/posts');
        return data;
    }

    async createPost(payload: CreatePost): Promise<Post> {
        const { data } = await axiosClient.post<Post>('/posts', payload);
        return data;
    }
}