import { Post } from "../../../domain/post/types";

interface PostListProps {
    posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
    return (
        <section>
            {posts.map(post => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}