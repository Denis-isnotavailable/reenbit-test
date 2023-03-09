import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

import { charactersReducer } from "./charactersSlice";
import { searchReducer } from "./searchSlice";
import { authReducer } from "./authSlice";

const persistConfig = {
    key: 'roots',
    storage,
};

export const store = configureStore({
    reducer: {
        charactersReducer,
        searchReducer: persistReducer(persistConfig, searchReducer),
        authReducer: persistReducer(persistConfig, authReducer)
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),   
});

export const persistor = persistStore(store); 