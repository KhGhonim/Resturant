import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { OneProductApi, ResturantProduct } from "../Redux/productAPI";
import CartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    CartShop: CartReducer,

    // Add the generated reducer as a specific top-level slice
    [ResturantProduct.reducerPath]: ResturantProduct.reducer,
    [OneProductApi.reducerPath]: OneProductApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ResturantProduct.middleware)
      .concat(OneProductApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
