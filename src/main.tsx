import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

// Domain Layer
import { GetPostsUseCase } from './domain/useCases/GetPosts.useCase';
import { AddPostUseCase } from './domain/useCases/AddPost.useCase';

// Data Layer
import { PostApiDataSource } from './data/dataSources/PostApiDataSource';
import { PostRepositoryImpl } from './data/repositories/PostRepository.impl';
import { QUERY_CONFIG } from './data/config/api.config';

// Presentation Layer
import { HomePage } from './presentation/components/pages/HomePage/HomePage';
import { ToastProvider } from './presentation/context/ToastContext';

/**
 * Configuración de React Query
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CONFIG.STALE_TIME,
      cacheTime: QUERY_CONFIG.CACHE_TIME,
      retry: QUERY_CONFIG.RETRY,
      retryDelay: QUERY_CONFIG.RETRY_DELAY,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Inyección de Dependencias
 * Creamos las instancias de las capas siguiendo Clean Architecture
 */
// Data Source
const postDataSource = new PostApiDataSource();

// Repository
const postRepository = new PostRepositoryImpl(postDataSource);

// Use Cases
const getPostsUseCase = new GetPostsUseCase(postRepository);
const addPostUseCase = new AddPostUseCase(postRepository);

/**
 * App Component
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <HomePage
          getPostsUseCase={getPostsUseCase}
          addPostUseCase={addPostUseCase}
        />
      </ToastProvider>
    </QueryClientProvider>
  );
};

/**
 * Renderizado con React 18 API
 */
const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
