import React from "react";
import { Home } from "./pages/Home";
import { Layout } from "./components/templates/Layout/Layout";

export const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
