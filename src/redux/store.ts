import { configureStore } from '@reduxjs/toolkit';
import tokenPairReducer from './slices/tokenPair';

export const store = configureStore({
  reducer: {
    tokenPair: tokenPairReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
