import { Post } from '../types';
import { PostRepository } from '../interfaces';

export class ListPostHandler {
    constructor(private readonly postRepository: PostRepository) { }

    async execute(): Promise<Post[]> {
        return this.postRepository.getPosts();
    }
}