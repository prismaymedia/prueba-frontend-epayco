import { QueryClient, QueryClientProvider } from 'react-query';

import { Home } from '../templates/Home';

export const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
};
