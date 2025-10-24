import { Post } from '../../../../domain/entities/Post.entity';

export interface PostCardProps {
  post: Post;
  isNew?: boolean;
}
