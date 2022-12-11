import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <HashRouter basename='/'>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
    {/* </BrowserRouter> */}
  </Provider>
);

reportWebVitals();