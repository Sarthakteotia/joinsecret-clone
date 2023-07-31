// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';

// Create a slice using Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define initial state for each slice
const initialUserState = { username: '' };
const initialProductsState = { items: [] };
const initialCartState = { items: [], total: 0 };

// Create a user slice with actions and reducers
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

// Create a products slice with actions and reducers
const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

// Create a cart slice with actions and reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
  },
});

// Combine your slices into a single reducer
const rootReducer = {
  user: userSlice.reducer,
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
  // Add more slices as needed
};

// Custom middleware example
const customMiddleware = (store) => (next) => (action) => {
  // Your custom middleware logic here
  console.log('Dispatching action:', action);
  return next(action);
};

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), customMiddleware],
  // Add other store configuration options if needed
});

// Export hooks to access the store
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

// Export Provider to wrap your app with the Redux store
export const ReduxProvider = Provider;

// Export your slices' action creators
export const { setUsername } = userSlice.actions;
export const { addItem } = productsSlice.actions;
export const { addToCart } = cartSlice.actions;

export default store;
