import { configureStore, Middleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counter from './counter/slice';
import togglers from './togglers/slice';
import { postsApi } from './api/postsAPI';

const rootReducer = combineReducers({
  counter,
  togglers,
  [postsApi.reducerPath]: postsApi.reducer,
});

const middleware: Middleware[] = [postsApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const storeDispatch = store.dispatch;
