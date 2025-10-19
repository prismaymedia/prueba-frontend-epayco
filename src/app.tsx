import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );

}