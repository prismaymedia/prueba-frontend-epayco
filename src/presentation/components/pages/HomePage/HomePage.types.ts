import { GetPostsUseCase } from '../../../../domain/useCases/GetPosts.useCase';
import { AddPostUseCase } from '../../../../domain/useCases/AddPost.useCase';

export interface HomePageProps {
  getPostsUseCase: GetPostsUseCase;
  addPostUseCase: AddPostUseCase;
}
