import type { Post, CreatePostRequest } from '../../domain/entities/Post';
import type { PostRepository } from './getPosts';

// Use case interface
export interface CreatePostUseCase {
  execute(request: CreatePostRequest): Promise<Post>;
}

// Implementation
export class CreatePostUseCaseImpl implements CreatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(request: CreatePostRequest): Promise<Post> {
    // Business logic validation could go here
    if (!request.title.trim()) {
      throw new Error('Title is required');
    }
    
    if (!request.body.trim()) {
      throw new Error('Body is required');
    }

    if (request.title.length < 3) {
      throw new Error('Title must be at least 3 characters long');
    }

    return await this.postRepository.create(request);
  }
} 