import { combineReducers } from '@reduxjs/toolkit';
import threadsReducer from './threadSlice';
import postsReducer from './postSlice';
import ppvsReducer from './ppvSlice';

const rootReducer = combineReducers({
  threads: threadsReducer,
  posts: postsReducer,
  payPerViews: ppvsReducer,
});

export default rootReducer;
