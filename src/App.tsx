import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./presentation/pages/Home";


const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};