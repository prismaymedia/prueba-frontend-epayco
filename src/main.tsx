import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { HomePage } from './components/organisms/HomePage';

const queryClient = new QueryClient();

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Check if root already exists to prevent multiple createRoot calls
type ContainerWithReactRoot = HTMLElement & { _reactRootContainer?: ReturnType<typeof createRoot> };
const containerWithRoot = container as ContainerWithReactRoot;
let root = containerWithRoot._reactRootContainer;
if (!root) {
  root = createRoot(containerWithRoot);
  containerWithRoot._reactRootContainer = root;
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
