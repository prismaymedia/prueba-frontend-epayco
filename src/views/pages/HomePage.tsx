import { PostList } from "../components/organisms/PostList";
import { PostForm } from "../components/molecules/PostForm";
import { createPostQueries } from "../../app/query/postQueries";

interface HomePageProps {
    postQueries: ReturnType<typeof createPostQueries>;
}

export const HomePage = ({ postQueries }: HomePageProps) => {
    const postsQuery = postQueries.useListPostQuery();
    const createPost = postQueries.useCreatePostMutation();

    if (postsQuery.isLoading) return <div>Cargando...</div>;
    if (postsQuery.error) return <div>Error: {postsQuery.error.message}</div>;

    return (
        <main>
            <h1>Agregar nuevo post</h1>
            <PostForm
                onSubmit={values => createPost.mutate(values, { onSuccess: () => postsQuery.refetch() })}
                isSubmitting={createPost.isLoading}
            />
            <h2>Listado</h2>
            <PostList posts={postsQuery.data ?? []} />
        </main>
    )
}