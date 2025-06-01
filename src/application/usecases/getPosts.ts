import type { Post } from '../../domain/entities/Post';

// Use case interface - defines what the application can do
export interface GetPostsUseCase {
  execute(): Promise<Post[]>;
}

// Implementation will be in infrastructure layer
export class GetPostsUseCaseImpl implements GetPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(): Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}

// Repository interface - to be implemented in infrastructure
export interface PostRepository {
  findAll(): Promise<Post[]>;
  create(post: CreatePostRequest): Promise<Post>;
}

import type { CreatePostRequest } from '../../domain/entities/Post'; 