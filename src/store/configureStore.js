import { createStore, applyMiddleware,compose } from 'redux';
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    axiosReduxMiddleware(clients),
  ),
  // other store enhancers if any
);

export default function configureStore(preloadedState) {
  return createStore(rootReducer, enhancer);
}