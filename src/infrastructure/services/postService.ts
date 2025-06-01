import { axiosClient } from '../api/axiosClient';
import type { Post, CreatePostRequest } from '../../domain/entities/Post';
import type { PostRepository } from '../../application/usecases/getPosts';

// Implementation of PostRepository interface
export class PostServiceImpl implements PostRepository {
  async findAll(): Promise<Post[]> {
    const response = await axiosClient.get<Post[]>('/posts');
    return response.data;
  }

  async create(request: CreatePostRequest): Promise<Post> {
    const response = await axiosClient.post<Post>('/posts', request);
    return response.data;
  }
}

// Singleton instance
export const postService = new PostServiceImpl(); 