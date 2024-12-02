import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./components/pages/Home";

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);