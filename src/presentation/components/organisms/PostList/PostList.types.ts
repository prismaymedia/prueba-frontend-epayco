import { Post } from '../../../../domain/entities/Post.entity';

export interface PostListProps {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
  newPostId?: number;
  onOpenAddPost?: () => void;
}
