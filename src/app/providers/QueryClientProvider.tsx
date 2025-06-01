import { QueryClient, QueryClientProvider as ReactQueryProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Configuración del QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 1000 * 60 * 5, // 5 minutos
      cacheTime: 1000 * 60 * 10, // 10 minutos
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <ReactQueryProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </ReactQueryProvider>
  );
}; 