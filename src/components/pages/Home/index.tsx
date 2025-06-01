import ErrorMessage from "../../atoms/ErrorMessage";
import Loader from "../../atoms/Loader";
import PageLayout from "../../layout/DefaultLayout";
import PostList from "../../organisms/PostList";
import PostForm from "../../organisms/PostForm";
import { usePostsContext } from "../../../hooks/userPostContext";

const Home = () => {
    const { error, isLoading } = usePostsContext();

    if (isLoading) return <Loader>Loading...</Loader>;
    if (error) return <ErrorMessage mode="fullScreen">Error loading items.</ErrorMessage>;

    return (
        <PageLayout>
            <PostForm />
            <PostList />
        </PageLayout>
    )
}

export default Home