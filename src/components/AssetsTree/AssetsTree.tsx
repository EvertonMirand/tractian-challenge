'use client';

import React, { useCallback, useEffect } from 'react';
import { Container, SearchInput, TreeContainer } from './AssetsTree.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetLocationsQuery } from '@/store/services/locationApi';
import { useGetAssetsQuery } from '@/store/services/assetsApi';

import { AssetsTreeItem } from './AssetsTreeItem';
import { setFilters } from '@/store/services/locationAssetsSlice';
import { selectFilteredTree } from '@/store/selectors/selectFilteredTree';
import debounce from 'lodash.debounce';

export const AssetsTree = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.locations);

  const filteredTree = useSelector((state: RootState) =>
    selectFilteredTree(state),
  );

  const debounceHandleSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilters({ name: e.target.value }));
    },
    500,
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debounceHandleSearch(e);
    },
    [debounceHandleSearch],
  );

  const { selectedCompany } = useSelector(
    (state: RootState) => state.companies,
  );

  const {
    refetch: refetchLocations,
    isError: isErrorLocation,
    isLoading: isLocationsLoading,
  } = useGetLocationsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  const {
    refetch: refetchAssets,
    isError: isErrorAssets,
    isLoading: isLoadingAssets,
  } = useGetAssetsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  useEffect(() => {
    if (selectedCompany?.id) {
      refetchLocations();
      refetchAssets();
    }
  }, [selectedCompany, refetchLocations, refetchAssets]);

  if (isErrorLocation || isErrorAssets) {
    return <p>Could not fetch locations or assets</p>;
  }

  if (isLoadingAssets || isLocationsLoading || loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <SearchInput
        placeholder="Buscar Ativo ou Local"
        onChange={handleSearch}
      />

      <TreeContainer>
        {filteredTree?.map((location) => (
          <>
            <AssetsTreeItem key={location.id} child={location} />
          </>
        ))}
      </TreeContainer>
    </Container>
  );
};
