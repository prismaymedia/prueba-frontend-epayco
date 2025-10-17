import React from 'react';
import App from './app';
import './index.css';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') ?? document.createElement('div');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)