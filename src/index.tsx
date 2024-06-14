import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReduceProvider from './context/ReduceContext';
import PropProvider from './context/PropContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduceProvider >
      <PropProvider>
        <App />
      </PropProvider>
    </ReduceProvider>
  </React.StrictMode>
);
