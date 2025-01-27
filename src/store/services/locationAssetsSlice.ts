import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Location } from '@/types/location';
import { Asset } from '@/types/assets';
import { locationsApi } from './locationApi';
import { assetsApi } from './assetsApi';
import { mergeArraysByKey } from '@/utils/arrays';
import { buildTree } from '@/utils/tree';

export interface LocationAssetsState {
  locations: Location[];
  assets: Location[];
  loading: boolean;
  error?: string;
  openItems: { [id: string]: boolean };
  locationTree?: Location[];
  filters: { name?: string; status?: string };
}

export const initialState: LocationAssetsState = {
  locations: [],
  assets: [],
  locationTree: [],
  openItems: {},
  loading: false,
  error: undefined,
  filters: {},
};

const locationAssetsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
    setAssets: (state, action: PayloadAction<Asset[]>) => {
      state.assets = action.payload;
    },
    setLocationTree: (state, action: PayloadAction<Location[]>) => {
      state.locationTree = [];
      state.locationTree = action.payload;
    },
    toggleItemOpen: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.openItems[id] = !state.openItems[id];
    },
    setFilters: (
      state,
      action: PayloadAction<{ name?: string; status?: string }>,
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        locationsApi.endpoints.getLocations.matchFulfilled,
        (state, action) => {
          state.locations = action.payload;
        },
      )
      .addMatcher(
        assetsApi.endpoints.getAssets.matchFulfilled,
        (state, action) => {
          state.assets = action.payload;
          console.log('Assets fetched:', action.payload);
          if (state.locations.length > 0 || state.assets.length > 0) {
            const merged = mergeArraysByKey(
              state.locations,
              state.assets,
              'id',
              'locationId',
              'assets',
              'id',
            ) as Location[];

            state.locationTree = buildTree(merged);
          } else {
            console.log('No locations or assets available for merging');
          }
        },
      )
      .addMatcher(
        locationsApi.endpoints.getLocations.matchRejected,

        (state, action) => {
          state.error = action.error.message || 'Something went wrong';
        },
      )
      .addMatcher(
        assetsApi.endpoints.getAssets.matchRejected,
        (state, action) => {
          state.error = action.error.message || 'Something went wrong';
        },
      );
  },
});

export const {
  setLoading,
  setError,
  setLocationTree,
  toggleItemOpen,
  setFilters,
} = locationAssetsSlice.actions;

export { locationAssetsSlice };
export const locationAssetsReducer = locationAssetsSlice.reducer;
