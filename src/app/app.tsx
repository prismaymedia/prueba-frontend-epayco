import { ReactNode } from "react";
import { createDependencies } from "./container";
import { QueryClient, QueryClientProvider } from "react-query";
import { createPostQueries } from "./query/postQueries";
import { HomePage } from "../views/pages/HomePage";

const queryClient = new QueryClient();
const dependencies = createDependencies();
const postQueries = createPostQueries(dependencies);

export const App = (): ReactNode => (
    <QueryClientProvider client={queryClient}>
        <HomePage postQueries={postQueries} />
    </QueryClientProvider>
);