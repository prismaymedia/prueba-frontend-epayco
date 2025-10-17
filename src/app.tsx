import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/queryClient';
import { Home } from './pages/Home';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
