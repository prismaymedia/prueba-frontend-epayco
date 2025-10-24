/**
 * Configuración de la API
 */
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  ENDPOINTS: {
    POSTS: '/posts',
  },
  TIMEOUTS: {
    REQUEST: 10000,
  },
} as const;

/**
 * Configuración de React Query
 */
export const QUERY_CONFIG = {
  STALE_TIME: 1000 * 60 * 5, // 5 minutos
  CACHE_TIME: 1000 * 60 * 10, // 10 minutos
  RETRY: 3,
  RETRY_DELAY: 1000,
} as const;
