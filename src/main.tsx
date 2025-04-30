import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';
import './styles/index.css';

// 1. Crear instancia de QueryClient (React Query)
const queryClient = new QueryClient();

// 2. Envolver App con el provider
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root') // 3. Montar en el <div id="root"> de index.html
);