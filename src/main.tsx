import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import { Home } from './presentation/pages/Home';

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);