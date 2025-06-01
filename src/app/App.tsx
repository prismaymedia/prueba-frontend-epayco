import React from 'react';
import { QueryClientProvider } from './providers/QueryClientProvider';
import { HomePage } from '../ui/pages/HomePage';

export const App: React.FC = () => {
  return (
    <QueryClientProvider>
      <div className="min-h-screen bg-gray-50">
        <HomePage />
      </div>
    </QueryClientProvider>
  );
}; 