// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoadingFallback from './components/LoadingFallback';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n/i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<LoadingFallback />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
