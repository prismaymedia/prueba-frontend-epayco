import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from '../components/templates/Layout';
import Main from '../components/organisms/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Main />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;