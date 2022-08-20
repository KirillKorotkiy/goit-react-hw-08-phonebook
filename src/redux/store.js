import { configureStore } from '@reduxjs/toolkit';
import { autQueryhApi } from "./auth/authQueryAPI";
import { contactsApi } from './contactsAPI';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistAuthReducer } from './auth/authSlice';

export const store = configureStore({
    reducer: {
      auth: persistAuthReducer,
      [autQueryhApi.reducerPath]: autQueryhApi.reducer,
      [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      autQueryhApi.middleware,
      contactsApi.middleware,
    ],
  });
  
  export const persistor = persistStore(store)