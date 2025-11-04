export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type CreatePost = {
    title: string;
    body: string;
};