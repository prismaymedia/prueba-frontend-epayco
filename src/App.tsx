import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from '@/presentation/pages/Home';

const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <Home />
    </QueryClientProvider>
);
