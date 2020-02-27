import React from 'react';
import { Provider } from 'react-redux';
import initStore from '../stores';
import AsyncApp from './AsyncApp';

const store = initStore();

export default function Root() {
  return (
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  );
}
