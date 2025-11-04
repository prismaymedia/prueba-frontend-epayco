import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { PostList } from '../components/organisms/PostList';
import { PostForm } from '../components/molecules/postForm';
import { UserFilter } from '../components/molecules/UserFilter';
import { Button } from '../components/atoms/Button';
import { createPostQueries } from '../../app/query/postQueries';
import type { Post } from '../../domain/post/types';

interface HomePageProps {
    postQueries: ReturnType<typeof createPostQueries>;
}

interface PostsState {
    items: Post[];
    latest: Post | null;
    showingSingle: boolean;
    selectedUserId: number | null;
}

type PostsAction =
    | { type: 'SET_INITIAL'; payload: Post[] }
    | { type: 'ADD_POST'; payload: Post }
    | { type: 'SHOW_ALL' }
    | { type: 'SELECT_USER'; payload: number | null };

const initialState: PostsState = {
    items: [],
    latest: null,
    showingSingle: false,
    selectedUserId: null,
};

const mergePosts = (existing: Post[], incoming: Post[]) => {
    const map = new Map<number, Post>();
    incoming.forEach(post => {
        map.set(post.id, post);
    });
    existing.forEach(post => {
        if (!map.has(post.id)) {
            map.set(post.id, post);
        }
    });
    return Array.from(map.values()).sort((a, b) => b.id - a.id);
};

const postsReducer = (state: PostsState, action: PostsAction): PostsState => {
    switch (action.type) {
        case 'SET_INITIAL':
            return {
                ...state,
                items: mergePosts(state.items, action.payload),
            };
        case 'ADD_POST': {
            const filtered = state.items.filter(post => post.id !== action.payload.id);
            return {
                ...state,
                items: [action.payload, ...filtered],
                latest: action.payload,
                showingSingle: true,
                selectedUserId: action.payload.userId ?? null,
            };
        }
        case 'SHOW_ALL':
            return {
                ...state,
                showingSingle: false,
                latest: null,
                selectedUserId: null,
            };
        case 'SELECT_USER':
            return {
                ...state,
                selectedUserId: action.payload,
                showingSingle: false,
            };
        default:
            return state;
    }
};

export const HomePage = ({ postQueries }: HomePageProps) => {
    const postsQuery = postQueries.useListPostQuery();
    const createPost = postQueries.useCreatePostMutation();
    const [state, dispatch] = useReducer(postsReducer, initialState);

    useEffect(() => {
        if (postsQuery.data) {
            dispatch({ type: 'SET_INITIAL', payload: postsQuery.data });
        }
    }, [postsQuery.data]);

    const handleShowAll = useCallback(() => {
        dispatch({ type: 'SHOW_ALL' });
        postsQuery.refetch();
    }, [postsQuery]);

    const selectRandomUserId = useCallback((): number => {
        const userIds = state.items.map(post => post.userId).filter(Boolean);
        if (userIds.length === 0) {
            return Math.floor(Math.random() * 10) + 1;
        }
        const index = Math.floor(Math.random() * userIds.length);
        return userIds[index];
    }, [state.items]);

    const handleSubmit = useCallback(
        (values: Parameters<typeof createPost.mutate>[0]) => {
            createPost.reset();
            createPost.mutate(values, {
                onSuccess: newPost => {
                    const enrichedPost: Post = {
                        ...newPost,
                        userId: selectRandomUserId(),
                    };

                    dispatch({ type: 'ADD_POST', payload: enrichedPost });
                },
            });
        },
        [createPost, selectRandomUserId],
    );

    const visiblePosts = useMemo(() => {
        if (state.showingSingle && state.latest) {
            return [state.latest];
        }
        if (state.selectedUserId !== null) {
            return state.items.filter(post => post.userId === state.selectedUserId);
        }
        return state.items;
    }, [state.items, state.latest, state.selectedUserId, state.showingSingle]);

    const userIds = useMemo(() => {
        const uniqueIds = Array.from(
            new Set(state.items.map(post => post.userId).filter((id): id is number => typeof id === 'number')),
        );
        return uniqueIds.sort((a, b) => a - b);
    }, [state.items]);

    const userPostCounts = useMemo(() => {
        return state.items.reduce<Record<number, number>>((acc, post) => {
            if (typeof post.userId === 'number') {
                acc[post.userId] = (acc[post.userId] ?? 0) + 1;
            }
            return acc;
        }, {});
    }, [state.items]);

    if (postsQuery.isLoading && state.items.length === 0) {
        return <div className="p-10 text-center text-slate-500">Cargando…</div>;
    }

    if (postsQuery.error && state.items.length === 0) {
        return <div className="p-10 text-center text-red-600">Error: {postsQuery.error.message}</div>;
    }

    const mutationError = createPost.isError
        ? createPost.error instanceof Error
            ? createPost.error.message
            : 'No se pudo crear el post. Intenta nuevamente.'
        : null;

    return (
        <main className="min-h-screen bg-slate-50 pb-12">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr]">
                    <div className="space-y-6">
                        <PostForm
                            onSubmit={handleSubmit}
                            isSubmitting={createPost.isLoading}
                            isSuccess={createPost.isSuccess}
                            errorMessage={mutationError}
                            onResetSuccess={() => createPost.reset()}
                        />

                        {state.showingSingle ? (
                            <Button
                                type="button"
                                variant="secondary"
                                fullWidth
                                onClick={handleShowAll}
                                disabled={postsQuery.isRefetching}
                            >
                                {postsQuery.isRefetching ? 'Recuperando listado…' : 'Ver todos los posts'}
                            </Button>
                        ) : null}

                        <UserFilter
                            users={userIds}
                            selectedUserId={state.selectedUserId}
                            onSelectUser={userId => dispatch({ type: 'SELECT_USER', payload: userId })}
                            postCounts={userPostCounts}
                        />
                    </div>

                    <section className="space-y-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    {state.showingSingle ? 'Post recién agregado' : 'Listado de posts'}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {state.showingSingle
                                        ? 'Visualizando únicamente la última publicación creada.'
                                        : state.selectedUserId !== null
                                            ? `Filtrado por el usuario ${state.selectedUserId}.`
                                            : 'Explora las publicaciones más recientes.'}
                                </p>
                            </div>

                            {state.selectedUserId !== null && !state.showingSingle ? (
                                <Button type="button" variant="ghost" size="sm" onClick={() => dispatch({ type: 'SELECT_USER', payload: null })}>
                                    Limpiar filtro
                                </Button>
                            ) : null}
                        </div>

                        <PostList posts={visiblePosts} />
                    </section>
                </div>
            </div>
        </main>
    );
};