import { QueryClientProvider } from 'react-query';
import { Home } from '../components/Home';
//import { queryClient } from '../utils/queryClient';
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};