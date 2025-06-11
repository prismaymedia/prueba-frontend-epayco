import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "../../components/pages/Home";

const queryClient = new QueryClient();

export const HomePage = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  };
  