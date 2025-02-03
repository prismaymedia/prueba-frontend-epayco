import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
  </QueryClientProvider>
);

export default App;
