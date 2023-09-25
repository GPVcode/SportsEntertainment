import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './state/index';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
