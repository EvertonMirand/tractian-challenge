import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { companiesApi } from './services/companiesApi';
import { companiesReducer } from './services/companieSlice';
import { assetsApi } from './services/assetsApi';
import { locationsApi } from './services/locationApi';
import { locationAssetsReducer } from './services/locationAssetsSlice';

export const store = configureStore({
  reducer: {
    [companiesApi.reducerPath]: companiesApi.reducer,
    [assetsApi.reducerPath]: assetsApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    locations: locationAssetsReducer,
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      companiesApi.middleware,
      assetsApi.middleware,
      locationsApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
