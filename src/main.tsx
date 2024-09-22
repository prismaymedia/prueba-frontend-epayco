import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './app'; 
import { ItemProvider } from './context/ItemContext';
import './index.css';

const queryClient = new QueryClient();

const Main: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ItemProvider>
        <App />
      </ItemProvider>
    </QueryClientProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
