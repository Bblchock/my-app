import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { App } from './App';

import { store } from 'redux';

const renderApp = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    throw Error('Ошибка загрузки приложения');
  }

  createRoot(root).render(
    <Provider store={store}>
      <HashRouter basename="/">
        <StrictMode>
          <App />
        </StrictMode>
      </HashRouter>
    </Provider>,
  );
};

renderApp();
