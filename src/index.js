import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Używamy createRoot zamiast render
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movie">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
