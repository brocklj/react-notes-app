import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger();

export default function initStore(preState) {
  return createStore(
    reducers,
    preState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
