import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './presentation/pages/Home/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;