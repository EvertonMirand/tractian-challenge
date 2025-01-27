import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { LocationAsset } from '@/types/mergedLocationAssets';

export const selectFilteredTree = createSelector(
  [
    (state: RootState) => state.locations.locationTree,
    (state: RootState) => state.locations.filters,
  ],
  (locationTree, filters) => {
    if (!locationTree) return [];
    if (!filters) return locationTree;

    const { name: nameFilter, status: statusFilter } = filters;

    const matchesNodeFilter = (node: LocationAsset) => {
      return (
        (!nameFilter ||
          node.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (!statusFilter || node.status === statusFilter)
      );
    };

    const filterTree = (nodes: LocationAsset[]): LocationAsset[] => {
      return nodes
        .map((node) => {
          const filteredChildren = node.children
            ? filterTree(node.children)
            : [];

          const filteredAssets = node.assets ? filterTree(node.assets) : [];

          if (
            matchesNodeFilter(node) ||
            filteredChildren.length > 0 ||
            filteredAssets.length > 0
          ) {
            return {
              ...node,
              children: filteredChildren,
              assets: filteredAssets,
            };
          }

          return null;
        })
        .filter((node) => node !== null) as LocationAsset[];
    };

    return filterTree(locationTree);
  },
);
