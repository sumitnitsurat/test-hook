import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import homeReducer from './Home/HomeReducer';

const combinedReducer = combineReducers({
  homeReducer,
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducer, initialState, applyMiddleware(thunk));
}
