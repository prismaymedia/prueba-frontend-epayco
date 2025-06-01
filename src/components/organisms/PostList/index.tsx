import { usePostsContext } from '../../../hooks/userPostContext';
import Item from '../../atoms/Item';
import Title from '../../atoms/Title';
import List from '../../molecules/ItemList';

const PostList = () => {
    const { posts } = usePostsContext()
    return (
        <>
            <Title level={2}>Items List</Title>
            <List posts={posts} renderComponent={(item) => (<Item {...item} />)} />
        </>
    )
}

export default PostList