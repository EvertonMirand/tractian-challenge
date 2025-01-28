import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Location } from '@/types/location';
import { Asset, AssetStatus } from '@/types/assets';
import { locationsApi } from './locationApi';
import { assetsApi } from './assetsApi';
import { mergeArraysByKey } from '@/utils/arrays';
import { buildTree } from '@/utils/tree';
import { LocationAsset } from '@/types/mergedLocationAssets';

export interface LocationAssetsFilters {
  name?: string;
  status?: AssetStatus;
}

export interface LocationAssetsState {
  locations: Location[];
  assets: Location[];
  loading: boolean;
  openItems: { [id: string]: boolean };
  filters: LocationAssetsFilters;
  error?: string;
  locationTree?: LocationAsset[];
  selectedAsset?: LocationAsset;
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
    setSelectedAsset: (state, action: PayloadAction<LocationAsset>) => {
      state.selectedAsset = action.payload;
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
    setFilters: (state, action: PayloadAction<LocationAssetsFilters>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        locationsApi.endpoints.getLocations.matchFulfilled,
        (state, action) => {
          state.locations = action.payload;
          state.isLocationsLoaded = true; // Mark locations as loaded
        },
      )
      .addMatcher(
        assetsApi.endpoints.getAssets.matchFulfilled,
        (state, action) => {
          state.assets = action.payload;
          state.isAssetsLoaded = true; // Mark assets as loaded
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('fulfilled'),
        (state) => {
          console.log('oi');
          // Check if both are loaded
          if (state.isLocationsLoaded && state.isAssetsLoaded) {
            state.loading = true;
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

            const tree = buildTree(merged);
            state.loading = false;
            state.locationTree = tree;

            // Optionally reset the flags if you want to reload data again later
            state.isLocationsLoaded = false;
            state.isAssetsLoaded = false;
          }
        },
      )
      .addMatcher(locationsApi.endpoints.getLocations.matchPending, (state) => {
        state.isLocationsLoading = true;
        state.isLocationsLoaded = false;
      })

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
  setSelectedAsset,
} = locationAssetsSlice.actions;

export { locationAssetsSlice };
export const locationAssetsReducer = locationAssetsSlice.reducer;
