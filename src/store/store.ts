import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { companiesApi } from "./services/companiesApi";
import { companiesReducer } from "./services/companieSlice";

export const store = configureStore({
  reducer: {
    [companiesApi.reducerPath]: companiesApi.reducer,
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companiesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
