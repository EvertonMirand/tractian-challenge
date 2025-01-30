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

          const nodeMatches = matchesNodeFilter(node);
          const hasMatchingDescendants =
            filteredChildren.length > 0 || filteredAssets.length > 0;

          if (nodeMatches || hasMatchingDescendants) {
            return node;
          }

          return null;
        })
        .filter(Boolean) as LocationAsset[];
    };

    return filterTree(locationTree);
  },
);
