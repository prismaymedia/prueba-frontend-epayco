import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './presentation/pages/HomePage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}


