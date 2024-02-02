import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../src/assets/fonts/font.css';
import "../src/styles/styles.css";
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);