import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { shopifyApi } from "./useRtkQuery";
export const rootReducer = combineReducers({
  cartSlice,
  [shopifyApi.reducerPath]: shopifyApi.reducer,
});
