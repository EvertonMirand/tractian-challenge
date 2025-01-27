'use client';

import React, { useEffect } from 'react';
import { Container, SearchInput, TreeContainer } from './AssetsTree.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetLocationsQuery } from '@/store/services/locationApi';
import { useGetAssetsQuery } from '@/store/services/assetsApi';

import { AssetsTreeItem } from './AssetsTreeItem';
import { setLocationTree } from '@/store/services/locationAssetsSlice';

export const AssetsTree = () => {
  const dispatch = useDispatch();
  const { locationTree } = useSelector((state: RootState) => state.locations);
  console.log(locationTree);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const { selectedCompany } = useSelector(
    (state: RootState) => state.companies,
  );

  const {
    refetch: refetchLocations,
    isLoading: isLoadingLocations,
    isError: isErrorLocation,
  } = useGetLocationsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  console.log('Selected Company:', selectedCompany?.id);
  const {
    refetch: refetchAssets,
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
  } = useGetAssetsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  useEffect(() => {
    if (selectedCompany?.id) {
      refetchLocations();
      refetchAssets();
    }
  }, [selectedCompany, dispatch]);

  // In case of data error or loading, return a message
  if (isErrorLocation || isErrorAssets) {
    return <p>Could not fetch locations or assets</p>;
  }

  if (isLoadingLocations || isLoadingAssets) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <SearchInput
        placeholder="Buscar Ativo ou Local"
        onChange={handleSearch}
      />

      <TreeContainer>
        {locationTree?.map((location) => (
          <>
            <AssetsTreeItem
              key={location.id}
              child={location}
              isAsset={false}
              isFirst
            />
          </>
        ))}
      </TreeContainer>
    </Container>
  );
};
