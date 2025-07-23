import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useSelector } from "react-redux";
import { shopifyApi } from "./useRtkQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartSlice'] // Only persist cartSlice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(shopifyApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

/**
 * Custom hook to select a slice state without repeating `state.[sliceName]`
 * @param {string} sliceName - The name of the slice in the store
 * @returns {any} - The corresponding slice state
 */
export const useAppSelector = (sliceName) => {
  return useSelector((state) => state[sliceName]);
};
