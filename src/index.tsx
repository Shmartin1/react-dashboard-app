import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/components/research.css';
import './styles/components/widgets.css';
import './styles/components/home.css';
import './styles/components/resume.css';
import './styles/header.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();