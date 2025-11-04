import { Post, CreatePost } from '../../domain/post/types';
import { ListPostHandler } from '../../domain/post/handlers/listPost';
import { CreatePostHandler } from '../../domain/post/handlers/createPost';
import { useQuery, useMutation, UseQueryResult, UseMutationResult } from 'react-query';

interface PostQueries {
    listPost: ListPostHandler;
    createPost: CreatePostHandler;
}

export const createPostQueries = ({ listPost, createPost }: PostQueries) => {
    const useListPostQuery = (): UseQueryResult<Post[], Error> => useQuery('posts', () => listPost.execute());

    const useCreatePostMutation = (): UseMutationResult<Post, Error, CreatePost> => useMutation(payload => createPost.execute(payload));

    return {
        useListPostQuery,
        useCreatePostMutation,
    };
}