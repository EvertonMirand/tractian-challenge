'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  NestedTree,
  SearchInput,
  StatusIndicator,
  TreeContainer,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetLocationsQuery } from '@/store/services/locationApi';
import { useGetAssetsQuery } from '@/store/services/assetsApi';
import { mergeArraysByKey } from '@/utils/arrays';
import { buildTree } from '@/utils/tree';
import { AssetsTreeItem } from './AssetsTreeItem';

export const AssetsTree = () => {
  const { locationTree, loading, error } = useSelector(
    (state: RootState) => state.locations,
  );

  const { selectedCompany } = useSelector(
    (state: RootState) => state.companies,
  );

  const { data: locations } = useGetLocationsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  useGetAssetsQuery(selectedCompany?.id ?? '', {
    skip: !locations?.length,
  });

  if (error) {
    return <p>Could not fetch locations or assets</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <SearchInput placeholder="Buscar Ativo ou Local" />

      <TreeContainer>
        {locationTree?.map((location) => (
          <>
            <AssetsTreeItem
              key={location.id}
              child={location}
              isAsset={false}
            />
          </>
        ))}
      </TreeContainer>
    </Container>
  );
};
