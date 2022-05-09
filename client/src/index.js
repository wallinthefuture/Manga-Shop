import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ComicsStore from './store/ComicsStore';
import BasketStore from './store/BasketStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      comics: new ComicsStore(),
      basket: new BasketStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
