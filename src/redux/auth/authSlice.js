import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, action) {
      state.token = action.payload;
    },
    clearState(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { setAuthToken, clearState, setUser } = authSlice.actions;

export const persistAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
