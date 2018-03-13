import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axiosReduxMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const clients=axios.create({
  baseURL:'http://localhost:3000',
  responseType:'json'
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      axiosReduxMiddleware(clients),
    )
  )
}