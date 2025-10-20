import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
};