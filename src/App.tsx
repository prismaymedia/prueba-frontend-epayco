import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/home";
import { ItemProvider } from "./modules/items";

export const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ItemProvider>
                <Home />
            </ItemProvider>
        </QueryClientProvider>
    );
};
