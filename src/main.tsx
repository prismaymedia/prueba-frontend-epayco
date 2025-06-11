import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage as App } from './pages/Home';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
