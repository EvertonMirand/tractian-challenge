'use client';

import React, { useCallback, useEffect, useState } from 'react';
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
  const [textFilter, setTextFilter] = useState('');
  const { loading, isAssetsLoading, isLocationsLoading } = useSelector(
    (state: RootState) => state.locations,
  );

  const filteredTree = useSelector((state: RootState) =>
    selectFilteredTree(state),
  );

  const debounceHandleSearch = debounce((text: string) => {
    dispatch(setFilters({ name: text }));
  }, 500);

  useEffect(() => {
    debounceHandleSearch(textFilter);
  }, [debounceHandleSearch, textFilter]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilter(e.target.value);
  }, []);

  const { selectedCompany } = useSelector(
    (state: RootState) => state.companies,
  );

  const { refetch: refetchLocations, isError: isErrorLocation } =
    useGetLocationsQuery(selectedCompany?.id ?? '', {
      skip: !selectedCompany?.id,
    });

  const { refetch: refetchAssets, isError: isErrorAssets } = useGetAssetsQuery(
    selectedCompany?.id ?? '',
    {
      skip: !selectedCompany?.id,
    },
  );

  useEffect(() => {
    if (selectedCompany?.id) {
      refetchLocations();
      refetchAssets();
    }
  }, [selectedCompany, refetchLocations, refetchAssets]);

  if (isAssetsLoading || isLocationsLoading || loading) {
    return <p>Loading...</p>;
  }

  if (isErrorLocation || isErrorAssets) {
    return <p>Could not fetch locations or assets</p>;
  }

  return (
    <Container>
      <SearchInput
        placeholder="Buscar Ativo ou Local"
        onChange={handleSearch}
        data-testid={`search`}
        value={textFilter}
      />

      <TreeContainer>
        {filteredTree?.map((location) => (
          <AssetsTreeItem key={location.id} child={location} />
        ))}
      </TreeContainer>
    </Container>
  );
};
