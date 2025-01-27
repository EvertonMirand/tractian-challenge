import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Location } from '@/types/location';
import { Asset } from '@/types/assets';
import { locationsApi } from './locationApi';
import { assetsApi } from './assetsApi';
import { mergeArraysByKey } from '@/utils/arrays';
import { buildTree } from '@/utils/tree';
import { LocationAsset } from '@/types/mergedLocationAssets';

export interface LocationAssetsState {
  locations: Location[];
  assets: Location[];
  loading: boolean;
  error?: string;
  openItems: { [id: string]: boolean };
  locationTree?: LocationAsset[];
  filters: { name?: string; status?: string };
  isLocationsLoading?: boolean; // Track loading state for locations
  isAssetsLoading?: boolean; // Track loading state for assets
  isLocationsLoaded?: boolean; // Flag to check if locations are loaded
  isAssetsLoaded?: boolean; // Flag to check if assets are loaded
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
    setLocationTree: (state, action: PayloadAction<LocationAsset[]>) => {
      console.log('Updating Tree in State:', action.payload);
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
      .addMatcher(locationsApi.endpoints.getLocations.matchPending, (state) => {
        state.isLocationsLoading = true;
        state.isLocationsLoaded = false;
      })
      .addMatcher(
        locationsApi.endpoints.getLocations.matchFulfilled,
        (state, action) => {
          state.locations = action.payload;
          state.isLocationsLoading = false;
          state.isLocationsLoaded = true;
        },
      )
      .addMatcher(
        locationsApi.endpoints.getLocations.matchRejected,
        (state, action) => {
          state.isLocationsLoading = false;
          state.error = action.error.message || 'Failed to load locations';
        },
      )
      .addMatcher(assetsApi.endpoints.getAssets.matchPending, (state) => {
        state.isAssetsLoading = true;
      })
      .addMatcher(
        assetsApi.endpoints.getAssets.matchFulfilled,
        (state, action) => {
          state.assets = action.payload;
          state.isAssetsLoading = false;
          state.isAssetsLoaded = true;

          // Only proceed with merging when both locations and assets are loaded
          if (state.isLocationsLoaded && state.isAssetsLoaded) {
            const merged = mergeArraysByKey({
              arr1: state.locations,
              arr2: state.assets,
              keyArr1: 'id',
              keyArr2: 'locationId',
              keyArr2NotInArr1: 'id',
              keyChildrenName: 'assets',
              keyToMarkTheArr1Type: 'isLocation',
              keyToMarkTheArr2Type: 'isAsset',
            }) as LocationAsset[];

            console.log('Merged Data:', merged);
            const tree = buildTree(merged);
            state.locationTree = tree;
            console.log('Tree Structure:', tree);
          }
        },
      )
      .addMatcher(
        assetsApi.endpoints.getAssets.matchRejected,
        (state, action) => {
          state.isAssetsLoading = false;
          state.error = action.error.message || 'Failed to load assets';
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
