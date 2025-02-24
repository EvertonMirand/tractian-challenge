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
import { PaginationContainer, PageButton, PageInfo } from './AssetsTree.styled';

const itemsPerPage = 10;

export const AssetsTree = () => {
  const dispatch = useDispatch();
  const [textFilter, setTextFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalItems = filteredTree.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredTree.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

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
        data-testid="search"
        value={textFilter}
      />

      <TreeContainer>
        {paginatedData.map((location) => (
          <AssetsTreeItem key={location.id} child={location} />
        ))}
      </TreeContainer>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <PaginationContainer>
          <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            ← Previous
          </PageButton>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next →
          </PageButton>
        </PaginationContainer>
      )}
    </Container>
  );
};
