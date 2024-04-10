import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const renderApp = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    throw Error('Ошибка загрузки приложения');
  }

  createRoot(root).render(
    <Provider store={store}>
      <HashRouter basename="/">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </Provider>,
  );
};

renderApp();
