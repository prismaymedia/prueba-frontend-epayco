import { CreatePost, Post } from '../types';
import { PostRepository } from '../interfaces';

export class CreatePostHandler {
    constructor(private readonly repository: PostRepository) { }

    async execute(payload: CreatePost): Promise<Post> {
        return this.repository.createPost(payload);
    }
}