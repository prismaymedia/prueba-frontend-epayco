import React from "react";
import { Post } from "../../../../domain/entities/post";
import { PostComponent } from "../post/post";
import { EmptyPlaceholder } from "../../molecules/empty-placeholder/empty-placeholder";


interface Props {
    posts: Post[];
    emptyPlaceholder?: React.ReactNode;
}

export const PostsList = ({ posts, emptyPlaceholder = <div>No hay posts.</div> }: Props): JSX.Element => {

    const gridClasses =
        posts.length <= 1
            ? "grid gap-4 max-w-2xl mx-auto"
            : "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4";


    if (!posts || posts.length === 0) return <EmptyPlaceholder message={emptyPlaceholder} />;

    return (
        <section aria-live="polite" className={gridClasses}>
            {posts.map((item) => (
                <PostComponent key={item.id ?? `${item.title}-${Math.random()}`} item={item} />
            ))}
        </section>
    );
};
