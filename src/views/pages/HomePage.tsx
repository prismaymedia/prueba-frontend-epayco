import { useCallback, useEffect, useMemo, useState } from 'react';
import { PostList } from '../components/organisms/PostList';
import { PostForm } from '../components/molecules/PostForm';
import { Button } from '../components/atoms/Button';
import { createPostQueries } from '../../app/query/postQueries';
import type { Post } from '../../domain/post/types';

interface HomePageProps {
    postQueries: ReturnType<typeof createPostQueries>;
}

export const HomePage = ({ postQueries }: HomePageProps) => {
    const postsQuery = postQueries.useListPostQuery();
    const createPost = postQueries.useCreatePostMutation();
    const [latestPost, setLatestPost] = useState<Post | null>(null);
    const [showingSingle, setShowingSingle] = useState(false);
    const [persistedPosts, setPersistedPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (!postsQuery.data) return;

        setPersistedPosts(prev => {
            const incoming = postsQuery.data ?? [];
            const prevMap = new Map(prev.map(post => [post.id, post]));

            const merged = incoming.map(post => prevMap.get(post.id) ?? post);

            prev.forEach(post => {
                if (!merged.find(existing => existing.id === post.id)) {
                    merged.push(post);
                }
            });

            return merged;
        });
    }, [postsQuery.data]);

    const handleShowAll = useCallback(() => {
        setShowingSingle(false);
        setLatestPost(null);
        postsQuery.refetch();
    }, [postsQuery]);

    const postsToDisplay = useMemo(() => {
        if (showingSingle && latestPost) {
            return [latestPost];
        }
        return persistedPosts;
    }, [latestPost, persistedPosts, showingSingle]);

    const selectRandomUserId = useCallback((): number => {
        const userIds = persistedPosts.map(post => post.userId).filter(Boolean);
        if (userIds.length === 0) {
            return Math.floor(Math.random() * 10) + 1;
        }
        const index = Math.floor(Math.random() * userIds.length);
        return userIds[index];
    }, [persistedPosts]);

    const handleSubmit = useCallback(
        (values: Parameters<typeof createPost.mutate>[0]) => {
            createPost.mutate(values, {
                onSuccess: newPost => {
                    const postWithUser: Post = {
                        ...newPost,
                        userId: selectRandomUserId(),
                    };

                    setPersistedPosts(prev => [postWithUser, ...prev]);
                    setLatestPost(postWithUser);
                    setShowingSingle(true);
                },
            });
        },
        [createPost, selectRandomUserId],
    );

    if (postsQuery.isLoading && persistedPosts.length === 0) return <div>Cargando...</div>;
    if (postsQuery.error && persistedPosts.length === 0) return <div>Error: {postsQuery.error.message}</div>;

    return (
        <main className="flex flex-col gap-6">
            <section className="space-y-4">
                <h1>Agregar nuevo post</h1>
                <PostForm onSubmit={handleSubmit} isSubmitting={createPost.isLoading} />
                {showingSingle ? (
                    <Button type="button" variant="secondary" fullWidth onClick={handleShowAll} disabled={postsQuery.isRefetching}>
                        {postsQuery.isRefetching ? 'Recuperando listado...' : 'Ver todos los posts'}
                    </Button>
                ) : null}
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2>{showingSingle ? 'Post recién agregado' : 'Listado de posts'}</h2>
                </div>
                <PostList posts={postsToDisplay} />
            </section>
        </main>
    );
};