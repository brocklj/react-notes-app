import React from 'react';
import { Provider } from 'react-redux';
import initStore from '../stores';
import App from './App';

const store = initStore();

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
