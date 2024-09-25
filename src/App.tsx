import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./components/page/Home.tsx";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};
