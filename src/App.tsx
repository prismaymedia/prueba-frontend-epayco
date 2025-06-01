import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/index.css';
import Home from './components/pages/Home';
import { PostProvider } from './providers/posts/PostsProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <Home />
      </PostProvider>
    </QueryClientProvider>
  );
};

export default App;