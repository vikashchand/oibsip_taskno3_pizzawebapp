import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzaReducer } from './Reducers/pizzaReducer';
import { cartReducer } from './Reducers/cartReducer';
import { RegisterUserReducer } from './Reducers/userReducer';


const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer:cartReducer,
  RegisterUserReducer:RegisterUserReducer
});


const cartItems =localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {

cartReducer :{
  cartItems:cartItems
}

};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  initialState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

export default store;
