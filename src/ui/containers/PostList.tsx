import { PostCard } from '../components/molecules/PostCard';
import type { Post } from '../../domain/entities/Post';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">
        Mostrando {posts.length} post{posts.length !== 1 ? 's' : ''}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
