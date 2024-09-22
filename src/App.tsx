import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home, ItemData } from "./components";
import { CreateItemContext } from "./context/CreateItemContext";
import { ItemDataContext } from "./context/ItemDataContext";

const queryClient = new QueryClient();

export const App = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [data, setData] = useState<ItemData[]>([]);
  return (
    <ItemDataContext.Provider value={{ data, setData }}>
      <CreateItemContext.Provider value={{ isCreating, setIsCreating }}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </CreateItemContext.Provider>
    </ItemDataContext.Provider>
  );
};
