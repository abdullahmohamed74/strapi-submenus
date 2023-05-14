import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/AppContext';
import './index.css';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
