import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { HashRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </HashRouter>
  </StrictMode>
);
