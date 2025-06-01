import type { Post } from '../../../domain/entities/Post';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <header className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 leading-tight">
          {post.title}
        </h3>
        <div className="mt-2 text-sm text-gray-500">
          Post ID: {post.id} | Usuario: {post.userId}
        </div>
      </header>
      
      <div className="text-gray-700 leading-relaxed">
        {post.body}
      </div>
    </article>
  );
};