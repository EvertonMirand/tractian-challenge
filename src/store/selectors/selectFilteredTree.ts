import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { Location } from '@/types/location';
import { Asset } from '@/types/assets';
import { LocationAsset } from '@/types/mergedLocationAssets';

export const selectFilteredTree = createSelector(
  [
    (state: RootState) => state.locations.locationTree, // Original tree structure
    (state: RootState) => state.locations.filters, // Filters for name and status
  ],
  (locationTree, filters) => {
    if (!locationTree) return [];
    if (!filters) return locationTree;

    const { name: nameFilter, status: statusFilter } = filters;

    const matchesFilter = (node: Location) => {
      const nameMatches =
        !nameFilter ||
        node.name.toLowerCase().includes(nameFilter.toLowerCase());
      const assetMatches =
        node.assets?.some(
          (asset: Asset) =>
            (!nameFilter ||
              asset.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (!statusFilter || asset.status === statusFilter),
        ) ?? false;
      return nameMatches || assetMatches;
    };

    const filterTree = (nodes: LocationAsset[]): LocationAsset[] => {
      const filteredNodes: LocationAsset[] = [];

      nodes.forEach((node) => {
        // Recursively filter children
        const filteredChildren = node.children ? filterTree(node.children) : [];

        // Check if this node matches the filters or has filtered children
        if (matchesFilter(node) || filteredChildren.length > 0) {
          filteredNodes.push({
            ...node,
            children: filteredChildren,
          });
        }
      });

      return filteredNodes;
    };

    return filterTree(locationTree);
  },
);
