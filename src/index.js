import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router> 
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
   
  </React.StrictMode>
);

