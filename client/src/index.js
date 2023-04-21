import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Context
import ToggleContextProvider from './context/ToggleContext';
import UserContextProvider from './context/UserContext';
// Styles
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToggleContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ToggleContextProvider>
  </BrowserRouter>
);
