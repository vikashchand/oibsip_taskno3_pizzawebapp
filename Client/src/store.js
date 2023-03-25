import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzaReducer } from './Reducers/pizzaReducer';

const rootReducer = combineReducers({
  allPizzas: getAllPizzaReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  initialState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

export default store;
