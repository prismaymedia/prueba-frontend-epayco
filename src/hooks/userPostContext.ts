import { useContext } from "react"
import { PostsContext } from "../providers/posts/PostsContext";

const usePostsContext = () => {
    const context = useContext(PostsContext);
    if (context === undefined) {
        throw new Error("usePostsContext must be used within a PostProvider");
    }
    return context;
}

export {
    usePostsContext
}