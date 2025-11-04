import { Post } from '../../../domain/post/types';

const UserIcon = () => (
    <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const FileTextIcon = () => (
    <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
);

interface PostListProps {
    posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
    if (posts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/60 p-10 text-center shadow-inner">
                <div className="mb-4 text-slate-300">
                    <FileTextIcon />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">No hay publicaciones.</h3>
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {posts.map(post => (
                <article
                    key={post.id}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                    <header className="mb-4 flex items-start justify-between gap-3">
                        <div className='w-full'>
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                                {post.title}
                            </h3>
                            <div className="mt-2 flex justify-end flex-wrap items-center gap-3 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                    <UserIcon /> Usuario {post.userId ?? '—'}
                                </span>
                            </div>
                        </div>
                    </header>
                    <p className="text-sm leading-6 text-slate-600">{post.body}</p>
                </article>
            ))}
        </div>
    );
};