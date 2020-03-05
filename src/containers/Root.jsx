import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { Provider } from 'react-redux';
import initStore from '../stores';
import App from './App';

const theme = {
  '$btn-primary-bg': 'blue',
  '$btn-primary-color': 'white'
};

const store = initStore();

export default function Root() {
  return (
    <Provider store={store}>
      <BootstrapProvider theme={theme}>
        <App />
      </BootstrapProvider>
    </Provider>
  );
}
