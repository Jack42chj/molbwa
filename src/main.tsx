import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../src/assets/fonts/font.css';
import "../src/styles/styles.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);