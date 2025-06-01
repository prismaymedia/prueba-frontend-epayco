import { useQuery } from 'react-query';
import { GetPostsUseCaseImpl } from '../../application/usecases/getPosts';
import { postService } from '../services/postService';
import { Post } from '../../domain/entities/Post';

// Create use case instance
const getPostsUseCase = new GetPostsUseCaseImpl(postService);

export const usePosts = () => {
  return useQuery<Post[], Error>(
    'posts',
    () => getPostsUseCase.execute(),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    }
  );
}; 