import { PostsRepository } from '../services/postsRepository';
import { ListPostHandler } from '../domain/post/handlers/listPost';
import { CreatePostHandler } from '../domain/post/handlers/createPost';

export const createDependencies = () => {
    const postsRepository = new PostsRepository();
    const listPost = new ListPostHandler(postsRepository);
    const createPost = new CreatePostHandler(postsRepository);

    return {
        listPost,
        createPost,
    };
};