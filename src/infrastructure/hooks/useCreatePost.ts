import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { CreatePostUseCaseImpl } from '../../application/usecases/createPost';
import { postService } from '../services/postService';
import type { Post, CreatePostRequest } from '../../domain/entities/Post';

// Create use case instance
const createPostUseCase = new CreatePostUseCaseImpl(postService);

export const useCreatePost = (): UseMutationResult<Post, Error, CreatePostRequest, unknown> => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, CreatePostRequest, unknown>(
    (request) => createPostUseCase.execute(request),
    {
      onSuccess: (newPost) => {
        queryClient.setQueryData('posts', [newPost]);
        console.log('Post created successfully:', newPost);
      },
      onError: (error) => {
        console.error('Error creating post:', error);
      },
      retry: 1,
    }
  );
};
